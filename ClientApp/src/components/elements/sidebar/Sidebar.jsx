import React from "react";
import Logo from "../logo/Logo";

import { ArrowCircleLeft32Regular } from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { StyledSidebarWrapper } from "./styledSidebar";

const Sidebar = () => {
  return (
    <StyledSidebarWrapper className="sidebar">
      <div className="sidebar__header">
        <Logo />
        <Button appearance="transparent">
          <ArrowCircleLeft32Regular />
        </Button>
      </div>
      <div className="sidebar__body"></div>
      <div className="sidebar__footer"></div>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
