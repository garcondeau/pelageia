import React, { useState, useEffect } from "react";
import axios from "axios";
import MainTitle from "../../elements/styledTitle/MainTitle";
import { subscriptions, roles } from "../../../utils/consts";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { DateToFormat } from "../../../utils/dateFormat";

import { StyledUsersContainer } from "../styledUsers";
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

const UsersListWrapper = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("/api/Users")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const setUserStatus = (id) => {
    axios
    .put(`/api/Users/change_active/${id}`)
    .then((response) => {
      if (response.status == "200") {
        console.log("Status changed");
        setDisabled(false);
      }
      else {
        fetchUsers();
      }
    })
  };

  const handleStatus = ({ e, user }) => {
    setDisabled(true);
    console.log(user)
    setUserStatus(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <StyledUsersContainer>
      <Breadcrumbs current="Users" />
      {loading && <Spinner labelPosition="below" size="medium" label="Loading" />}
      {!loading && data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Active</TableHeaderCell>
              <TableHeaderCell>UID</TableHeaderCell>
              <TableHeaderCell>User name</TableHeaderCell>
              <TableHeaderCell>User role</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Phone number</TableHeaderCell>
              <TableHeaderCell>Registration date</TableHeaderCell>
              <TableHeaderCell>Subscription</TableHeaderCell>
              <TableHeaderCell className="table-action" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((user, key) => (
              <TableRow key={key}>
                <TableCell>
                  <Switch
                    disabled={disabled}
                    onChange={(event) => handleStatus({e: event, user: user.id})}
                    defaultChecked={user.isActive}
                  />
                </TableCell>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.userName}</TableCell>
                <TableCell>{roles[user.role]}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{DateToFormat(user.createdAt)}</TableCell>
                <TableCell>{subscriptions[user.subscription]}</TableCell>
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
                        <NavLink to={`/panel/users/${user.id}`}>
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
    </StyledUsersContainer>
  );
};

export default UsersListWrapper;
