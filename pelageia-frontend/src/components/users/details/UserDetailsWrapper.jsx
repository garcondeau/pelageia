import React, { useState, useEffect } from "react";
import axios from "axios";
import { subscriptions, roles, user_status } from "../../../utils/consts";
import MainTitle from "../../elements/styledTitle/MainTitle";
import { DateToFormat } from "../../../utils/dateFormat";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";

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
  AccordionPanel
} from "@fluentui/react-components";
import {
  Mail16Regular,
  Edit16Regular,
  PersonDelete16Filled,
} from "@fluentui/react-icons";

const UserDetailsWrapper = ({ match }) => {
  const [data, setData] = useState();
  const [providers, setProviders] = useState([
    {
      id: 1,
      provider_name: "Test",
      created_at: "13.10.2022",
    },
  ]);
  const fetchUsers = () => {
    axios
      .get("/api/User/" + match.params.id)
      .then((response) => {
        setData(response.data);
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
      {/* <MainTitle text="User details" /> */}
      <Breadcrumbs
        current="User details"
        previous="Users"
        link="/panel/users"
      />
      {data && (
        // <Card appearance="subtle" orientation="vertical" className="user-card">
        //   <Tooltip
        //     withArrow
        //     content={user_status[data.isActive]["text"]}
        //     relationship="label"
        //     positioning="after-bottom"
        //   >
        //     <Avatar
        //       name={data.userName}
        //       badge={{ status: user_status[data.isActive]["badge"] }}
        //       color="colorful"
        //       size="72"
        //     />
        //   </Tooltip>
        //   <StyledList>
        //     <StyledListRow>
        //       <StyledListCell>User id:</StyledListCell>
        //       <StyledListCell>{data.id}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>User name:</StyledListCell>
        //       <StyledListCell>{data.userName}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>User role:</StyledListCell>
        //       <StyledListCell>{roles[data.role]}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>User email:</StyledListCell>
        //       <StyledListCell>{data.email}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>Registration date:</StyledListCell>
        //       <StyledListCell>{DateToFormat(data.createdAt)}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>User phone:</StyledListCell>
        //       <StyledListCell>{data.phone}</StyledListCell>
        //     </StyledListRow>
        //     <StyledListRow>
        //       <StyledListCell>User subscription:</StyledListCell>
        //       <StyledListCell>
        //         {subscriptions[data.subscription]}
        //       </StyledListCell>
        //     </StyledListRow>
        //   </StyledList>
        //   <Divider className="card-divider">
        //     <Text size={600}>User providers</Text>
        //   </Divider>
        //   <Table className="user-providers-table">
        //     <TableHeader>
        //       <TableRow>
        //         <TableHeaderCell>Provider name</TableHeaderCell>
        //         <TableHeaderCell>Creation date</TableHeaderCell>
        //         <TableHeaderCell className="table-action" />
        //       </TableRow>
        //     </TableHeader>
        //     <TableBody>
        //       {providers.map((provider, key) => (
        //         <TableRow key={key}>
        //           <TableCell>{provider.provider_name}</TableCell>
        //           <TableCell>{provider.created_at}</TableCell>
        //           <TableCell className="table-action">
        //             <Menu>
        //               <MenuTrigger>
        //                 <MenuButton
        //                   icon={<MoreVertical24Regular />}
        //                   appearance="subtle"
        //                   shape="circular"
        //                 />
        //               </MenuTrigger>
        //               <MenuPopover>
        //                 <MenuList>
        //                   <MenuItem>Details</MenuItem>
        //                   <MenuItem>Delete</MenuItem>
        //                 </MenuList>
        //               </MenuPopover>
        //             </Menu>
        //           </TableCell>
        //         </TableRow>
        //       ))}
        //     </TableBody>
        //   </Table>
        //   <CardFooter>
        //     <Button icon={<EditRegular fontSize={16} />}>Edit</Button>
        //     <Button
        //       appearance="secondary"
        //       style={{ background: "#D13438", color: "#FFFFFF" }}
        //       icon={<DismissRegular fontSize={16} />}
        //     >
        //       Deactivate
        //     </Button>
        //   </CardFooter>
        // </Card>
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
              <AccordionHeader>User information</AccordionHeader>
              <AccordionPanel>
                test
              </AccordionPanel>
            </StyledUserProp>
            <StyledUserProp value="Providers">
              <AccordionHeader>User providers</AccordionHeader>
              <AccordionPanel>
                test
              </AccordionPanel>
            </StyledUserProp>
          </Accordion>
        </StyledUserCard>
      )}
    </StyledUsersContainer>
  );
};

export default UserDetailsWrapper;
