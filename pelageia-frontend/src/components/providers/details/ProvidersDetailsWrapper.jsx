import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import { subscriptions, user_status } from "../../../utils/consts";
import { DateToFormat } from "../../../utils/dateFormat";

import { StyledProvidersContainer } from "../styledProviders";
import { Card, Persona } from "@fluentui/react-components/unstable";
import {
  Divider,
  Text,
  Popover,
  PopoverTrigger,
  PopoverSurface,
} from "@fluentui/react-components";
import {
  StyledList,
  StyledListCell,
  StyledListRow,
} from "../../styled/styledList";

const ProvidersDetailsWrapper = ({ match }) => {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);

  const fetchProvider = () => {
    axios
      .get("/api/Providers/" + match.params.id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUser = () => {
    axios
      .get("/api/Users/" + data.userId)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProvider();
  }, []);
  useEffect(() => {
    if (data) {
      fetchUser();
    }
  }, [data]);
  return (
    <StyledProvidersContainer>
      <Breadcrumbs
        current="Provider details"
        previous="Providers"
        link="/panel/providers"
      />
      {user && data && (
        <Card appearance="subtle" orientation="vertical">
          <Divider>
            <Text size="600">Provider info</Text>
          </Divider>
          <StyledList>
            <StyledListRow>
              <StyledListCell>Provider id:</StyledListCell>
              <StyledListCell>{data.id}</StyledListCell>
              <StyledListCell>Provider name:</StyledListCell>
              <StyledListCell>{data.name}</StyledListCell>
              <StyledListCell>Created:</StyledListCell>
              <StyledListCell>{DateToFormat(data.createdAt)}</StyledListCell>
              <StyledListCell>Created by:</StyledListCell>
              <StyledListCell
                aria-label="Close"
                onMouseLeave={() => setOpen(false)}
              >
                <Popover aria-label="Popup" open={open}>
                  <PopoverTrigger>
                    <NavLink
                      aria-label="Open"
                      onMouseEnter={() => setOpen(true)}
                      to={`/panel/users/${user.id}`}
                    >
                      {user.userName}
                    </NavLink>
                  </PopoverTrigger>
                  <PopoverSurface>
                    <Persona
                      avatar={{color: 'colorful'}}
                      name={user.userName}
                      presence={{ status: user_status[user.active]}}
                      secondaryText={`User id: ${user.id}`}
                      tertiaryText={`Email: ${user.email}`}
                      quaternaryText={subscriptions[user.subscription]}
                    />
                  </PopoverSurface>
                </Popover>
              </StyledListCell>
            </StyledListRow>
          </StyledList>
        </Card>
      )}
    </StyledProvidersContainer>
  );
};

export default ProvidersDetailsWrapper;
