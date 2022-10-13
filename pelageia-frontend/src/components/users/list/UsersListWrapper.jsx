import React, { useState, useEffect } from "react";
import MainTitle from "../../elements/styledTitle/MainTitle";
import { subscriptions, roles } from "../../../utils/consts";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";

import { StyledUsersContainer } from "../styledUsers";
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

const UsersListWrapper = () => {
  const [data, setData] = useState([
    {
      id: "1",
      user_name: "John Doe",
      role: "client",
      email: "johndoe@gmail.com",
      is_active: false,
      phone: "+48123456789",
      created_at: "13.10.2022",
      subscription: 1,
    },
    {
      id: "2",
      user_name: "Jane Doe",
      role: "client",
      email: "janedoe@gmail.com",
      is_active: true,
      phone: "+48987654321",
      created_at: "13.10.2022",
      subscription: 2,
    },
  ]);

  return (
    <StyledUsersContainer>
      <MainTitle text="Users list" />
      <Breadcrumbs current="Users" />
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
                <Switch checked={user.is_active} />
              </TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.user_name}</TableCell>
              <TableCell>{roles[user.role]}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.created_at}</TableCell>
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
    </StyledUsersContainer>
  );
};

export default UsersListWrapper;
