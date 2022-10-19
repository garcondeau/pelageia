import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import MainTitle from "../../elements/styledTitle/MainTitle";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { DateToFormat } from "../../../utils/dateFormat";
import {AuthContext} from "../../../App";

import { StyledProvidersContainer } from "../styledProviders";
import {
  Switch,
  Menu,
  MenuButton,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuTrigger,
  Spinner,
} from "@fluentui/react-components";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@fluentui/react-components/unstable";
import { MoreVertical24Regular } from "@fluentui/react-icons";

const ProvidersListWrapper = () => {
  const user = useContext(AuthContext)
  const [data, setData] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const fetchProviders = () => {
    setLoading(true);
    axios
      .get("/api/Providers")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("/api/Users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const setProviderStatus = (id) => {
    axios.put(`/api/Providers/change_active/${id}`).then((response) => {
      if (response.status == "200") {
        console.log("Status changed");
        setDisabled(false);
      } else {
        fetchUsers();
      }
    });
  };

  const handleStatus = ({ e, provider }) => {
    setDisabled(true);
    console.log(provider);
    setProviderStatus(provider);
  };

  useEffect(() => {
    fetchProviders();
  }, [user]);
  useEffect(() => {
    fetchUsers();
  }, [user]);
  return (
    <StyledProvidersContainer>
      <Breadcrumbs current="Providers" />
      {loading && (
        <Spinner labelPosition="below" size="medium" label="Loading" />
      )}
      {!loading && data && users && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Provider</TableHeaderCell>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Created at</TableHeaderCell>
              <TableHeaderCell className="table-action" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((provider, key) => (
              <TableRow key={key}>
                <TableCell>
                  <Switch
                    onChange={(event) =>
                      handleStatus({ e: event, provider: provider.id })
                    }
                    disabled={disabled}
                    defaultChecked={provider.active}
                  />
                </TableCell>
                <TableCell>{provider.id}</TableCell>
                <TableCell>{provider.name}</TableCell>
                {users.map((user, key) => (
                  <>
                    {user.id === provider.userId && (
                      <TableCell key={key}>
                        <NavLink to={`/panel/users/${provider.userId}`}>
                          {user.userName}
                        </NavLink>
                      </TableCell>
                    )}
                  </>
                ))}
                <TableCell>{DateToFormat(provider.createdAt)}</TableCell>
                <TableCell className="table-action">
                  <Menu>
                    <MenuTrigger>
                      <MenuButton
                        icon={<MoreVertical24Regular />}
                        appearance="subtle"
                        shape="circular"
                      />
                    </MenuTrigger>
                    <MenuPopover>
                      <MenuList>
                        <NavLink to={`/panel/providers/${provider.id}`}>
                          <MenuItem>Details</MenuItem>
                        </NavLink>
                        <MenuItem>Delete</MenuItem>
                      </MenuList>
                    </MenuPopover>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </StyledProvidersContainer>
  );
};

export default ProvidersListWrapper;
