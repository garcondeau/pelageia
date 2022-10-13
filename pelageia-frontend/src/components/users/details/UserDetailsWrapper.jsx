import React, { useState, useEffect } from "react";
import { subscriptions, roles, user_status } from "../../../utils/consts";
import MainTitle from "../../elements/styledTitle/MainTitle";

import { StyledUsersContainer } from "../styledUsers";
import {
  StyledList,
  StyledListRow,
  StyledListCell,
} from "../../styled/styledList";
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Text,
  Tooltip,
} from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from "@fluentui/react-components/unstable";
import {
  EditRegular,
  DismissRegular,
  MoreVertical24Regular,
} from "@fluentui/react-icons";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";

const UserDetailsWrapper = () => {
  const [data, setData] = useState({
    id: "1",
    user_name: "John Doe",
    role: "client",
    email: "johndoe@gmail.com",
    is_active: false,
    phone: "+48123456789",
    created_at: "13.10.2022",
    subscription: 1,
  });
  const [providers, setProviders] = useState([
    {
      id: 1,
      provider_name: "Test",
      created_at: "13.10.2022",
    },
  ]);
  return (
    <StyledUsersContainer>
      <MainTitle text="User details" />
      <Breadcrumbs current="User details" previous="Users" link="/panel/users"/>
      <Card orientation="vertical" className="user-card">
        <Divider className="card-divider">
          <Text size={600}>User info</Text>
        </Divider>
        <Tooltip
          withArrow
          content={user_status[data.is_active]["text"]}
          relationship="label"
          positioning="after-bottom"
        >
          <Avatar
            name={data.user_name}
            badge={{ status: user_status[data.is_active]["badge"] }}
            color="colorful"
            size="128"
          />
        </Tooltip>
        <StyledList>
          <StyledListRow>
            <StyledListCell>User id:</StyledListCell>
            <StyledListCell>{data.id}</StyledListCell>
          </StyledListRow>
          <StyledListRow>
            <StyledListCell>User role:</StyledListCell>
            <StyledListCell>{roles[data.role]}</StyledListCell>
          </StyledListRow>
          <StyledListRow>
            <StyledListCell>User email:</StyledListCell>
            <StyledListCell>{data.email}</StyledListCell>
          </StyledListRow>
          <StyledListRow>
            <StyledListCell>Registration date:</StyledListCell>
            <StyledListCell>{data.created_at}</StyledListCell>
          </StyledListRow>
          <StyledListRow>
            <StyledListCell>User phone:</StyledListCell>
            <StyledListCell>{data.phone}</StyledListCell>
          </StyledListRow>
          <StyledListRow>
            <StyledListCell>User subscription:</StyledListCell>
            <StyledListCell>{subscriptions[data.subscription]}</StyledListCell>
          </StyledListRow>
        </StyledList>
        <Divider className="card-divider">
          <Text size={600}>User providers</Text>
        </Divider>
        <Table className="user-providers-table">
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Provider name</TableHeaderCell>
              <TableHeaderCell>Creation date</TableHeaderCell>
              <TableHeaderCell className="table-action" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {providers.map((provider, key) => (
              <TableRow key={key}>
                <TableCell>{provider.provider_name}</TableCell>
                <TableCell>{provider.created_at}</TableCell>
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
                        <MenuItem>Details</MenuItem>
                        <MenuItem>Delete</MenuItem>
                      </MenuList>
                    </MenuPopover>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CardFooter>
          <Button icon={<EditRegular fontSize={16} />}>Edit</Button>
          <Button
            appearance="secondary"
            style={{ background: "#D13438", color: "#FFFFFF" }}
            icon={<DismissRegular fontSize={16} />}
          >
            Deactivate
          </Button>
        </CardFooter>
      </Card>
    </StyledUsersContainer>
  );
};

export default UserDetailsWrapper;
