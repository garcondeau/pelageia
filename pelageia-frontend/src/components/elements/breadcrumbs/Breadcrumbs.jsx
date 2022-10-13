import React from "react";

import {
  StyledBreadcrumbsList,
  StyledBreadcrumbItem,
  Separator,
} from "./styledBreadcrumbs";

const Breadcrumbs = ({ current, previous, link }) => {
  return (
    <StyledBreadcrumbsList>
      <StyledBreadcrumbItem to="/">Home</StyledBreadcrumbItem>
      <Separator />
      {previous && (
        <>
          <StyledBreadcrumbItem to={link}>{previous}</StyledBreadcrumbItem>
          <Separator />
        </>
      )}
      <StyledBreadcrumbItem className="active-link" to="#">{current}</StyledBreadcrumbItem>
    </StyledBreadcrumbsList>
  );
};

export default Breadcrumbs;
