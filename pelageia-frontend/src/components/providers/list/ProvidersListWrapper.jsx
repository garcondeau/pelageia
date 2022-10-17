import React, { useState, useEffect } from "react";
import axios from "axios";
import MainTitle from "../../elements/styledTitle/MainTitle";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";
import { DateToFormat } from "../../../utils/dateFormat";

import { StyledProvidersContainer } from "../styledProviders";
import {
  Switch,
  Menu,
  MenuButton,
  MenuPopover,
  MenuList,
  MenuItem,
  MenuTrigger,
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
  const [data, setData] = useState();

  const fetchProviders = () => {
    axios
      .get("/api/Providers")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
      fetchProviders()
  }, [])
  return (
    <StyledProvidersContainer>
      <MainTitle text="Providers list" />
      <Breadcrumbs current="Providers" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Active</TableHeaderCell>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Provider</TableHeaderCell>
            <TableHeaderCell>User id</TableHeaderCell>
            <TableHeaderCell>Created at</TableHeaderCell>
            <TableHeaderCell className="table-action" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {data &&
            data.map((provider, key) => (
              <TableRow key={key}>
                <TableCell>
                  <Switch checked={provider.isActive} />
                </TableCell>
                <TableCell>{provider.id}</TableCell>
                <TableCell>{provider.name}</TableCell>
                <TableCell>{provider.userId}</TableCell>
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
    </StyledProvidersContainer>
  );
};

export default ProvidersListWrapper;
