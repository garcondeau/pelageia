import React, { useState, useEffect } from "react";
import axios from "axios";
import { subscriptions, roles, user_status } from "../../../utils/consts";
import { DateToFormat } from "../../../utils/dateFormat";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { NavLink } from "react-router-dom";

import {
  StyledList,
  StyledListRow,
  StyledListCell,
} from "../../styled/styledList";
import {
  StyledUsersContainer,
  StyledUserCard,
  StyledUserPreview,
  StyledUserActionButton,
  StyledUserProp,
} from "../styledUsers";
import {
  Avatar,
  Tooltip,
  Title1,
  Caption1,
  Subtitle2,
  Accordion,
  AccordionHeader,
  AccordionPanel,
  Menu,
  MenuTrigger,
  MenuButton,
  MenuPopover,
  MenuList,
  MenuItem,
  Spinner,
} from "@fluentui/react-components";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableCell,
} from "@fluentui/react-components/unstable";
import {
  Mail16Regular,
  Edit16Regular,
  PersonDelete16Filled,
  PersonInfoFilled,
  GridFilled,
  MoreVertical24Regular,
} from "@fluentui/react-icons";

const UserDetailsWrapper = ({ match }) => {
  const [data, setData] = useState();
  const [providers, setProviders] = useState();
  const [loading, setLoading] = useState(false);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("/api/Users/" + match.params.id)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const fetchProviders = () => {
    axios
      .get("/api/Providers/user/" + match.params.id)
      .then((response) => {
        setProviders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <StyledUsersContainer>
      <Breadcrumbs
        current="User details"
        previous="Users"
        link="/panel/users"
      />
      {loading && <Spinner labelPosition="below" size="medium" label="Loading" />}
      {!loading && data && (
        <StyledUserCard className="user">
          <StyledUserPreview>
            <div className="user__info">
              <Tooltip
                withArrow
                content={user_status[data.isActive]["text"]}
                relationship="label"
                positioning="after-bottom"
              >
                <Avatar
                  name={data.userName}
                  badge={{ status: user_status[data.isActive]["badge"] }}
                  color="colorful"
                  size="72"
                />
              </Tooltip>
              <div className="user__creds">
                <Title1 block>{data.userName}</Title1>
                <Caption1 className="user__email" block>
                  <Mail16Regular />
                  {data.email}
                </Caption1>
              </div>
            </div>
            <div className="user__actions">
              <div className="user__action-btn">
                <StyledUserActionButton
                  shape="circular"
                  icon={<Edit16Regular />}
                />
                <Subtitle2 block>Edit user</Subtitle2>
                <Caption1 block>Edit user information</Caption1>
              </div>
              <div className="user__action-btn">
                <StyledUserActionButton
                  error
                  shape="circular"
                  icon={<PersonDelete16Filled />}
                />
                <Subtitle2 block>Delete user</Subtitle2>
                <Caption1 block>Completely delete user</Caption1>
              </div>
            </div>
          </StyledUserPreview>
          <Accordion multiple>
            <StyledUserProp value="Info">
              <AccordionHeader expandIconPosition="end">
                <PersonInfoFilled
                  style={{
                    color: "rgb(0,111,201)",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />
                <div className="user__prop">
                  <Subtitle2 block>User information</Subtitle2>
                  <Caption1 block>Show full user information</Caption1>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                <StyledList>
                  <StyledListRow>
                    <StyledListCell>User id:</StyledListCell>
                    <StyledListCell>{data.id}</StyledListCell>
                  </StyledListRow>
                  <StyledListRow>
                    <StyledListCell>User name:</StyledListCell>
                    <StyledListCell>{data.userName}</StyledListCell>
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
                    <StyledListCell>
                      {DateToFormat(data.createdAt)}
                    </StyledListCell>
                  </StyledListRow>
                  <StyledListRow>
                    <StyledListCell>User phone:</StyledListCell>
                    <StyledListCell>{data.phone}</StyledListCell>
                  </StyledListRow>
                  <StyledListRow>
                    <StyledListCell>User subscription:</StyledListCell>
                    <StyledListCell>
                      {subscriptions[data.subscription]}
                    </StyledListCell>
                  </StyledListRow>
                </StyledList>
              </AccordionPanel>
            </StyledUserProp>
            <StyledUserProp onClick={() => fetchProviders()} value="Providers">
              <AccordionHeader expandIconPosition="end">
                <GridFilled
                  style={{
                    color: "rgb(0,111,201)",
                    fontSize: "24px",
                    marginRight: "10px",
                  }}
                />
                <div className="user__prop">
                  <Subtitle2 block>Providers</Subtitle2>
                  <Caption1 block>Show providers created by user</Caption1>
                </div>
              </AccordionHeader>
              <AccordionPanel>
                {!providers && (
                  <Spinner
                    labelPosition="below"
                    size="small"
                    label="Loading user providers"
                  />
                )}
                {providers && (
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
                          <TableCell>{provider.name}</TableCell>
                          <TableCell>
                            {DateToFormat(provider.createdAt)}
                          </TableCell>
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
                                  <NavLink
                                    to={"/panel/providers/" + provider.id}
                                  >
                                    Details
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
              </AccordionPanel>
            </StyledUserProp>
          </Accordion>
        </StyledUserCard>
      )}
    </StyledUsersContainer>
  );
};

export default UserDetailsWrapper;
