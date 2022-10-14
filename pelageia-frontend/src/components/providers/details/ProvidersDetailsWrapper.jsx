import React, { useState, useEffect } from "react";
import axios from "axios";
import Breadcrumbs from "../../elements/breadcrumbs/Breadcrumbs";
import MainTitle from "../../elements/styledTitle/MainTitle";

import { StyledProvidersContainer } from "../styledProviders";
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
import { Divider, Text } from "@fluentui/react-components";
import { StyledList, StyledListCell, StyledListRow } from "../../styled/styledList";

const ProvidersDetailsWrapper = ({ match }) => {
  const [data, setData] = useState();

  const fetchProvider = () => {
    axios
      .get("api/Providers/" + match.params.id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // useEffect(() => {
  //     fetchProvider()
  // },[])
  return (
    <StyledProvidersContainer>
      <MainTitle text="Provider details" />
      <Breadcrumbs
        current="Provider details"
        previos="Providers"
        link="/panel/providers"
      />
      {data && (
        <Card appearance="subtle" orientation="vertical">
            <Divider>
                <Text size="600">Provider info</Text>
            </Divider>
            <StyledList>
                <StyledListRow>
                    <StyledListCell>
                        Provider id:
                    </StyledListCell>
                    <StyledListCell>
                        {data.id}
                    </StyledListCell>
                </StyledListRow>
            </StyledList>
        </Card>
      )}
    </StyledProvidersContainer>
  );
};
