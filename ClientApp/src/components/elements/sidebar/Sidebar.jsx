import React, { useState } from "react";
import Logo from "../logo/Logo";
import AppRoutes from "../../../AppRoutes";

import {
  ArrowCircleLeft32Regular,
  ArrowCircleRight32Regular,
  ArrowExitRegular,
} from "@fluentui/react-icons";
import { Button } from "@fluentui/react-components";
import { StyledSidebarWrapper, SidebarLink } from "./styledSidebar";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const CollapseSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <StyledSidebarWrapper
      style={{ width: collapsed ? "70px" : "400px" }}
      className="sidebar"
    >
      <div
        style={{ flexDirection: collapsed ? "column" : "row" }}
        className="sidebar__header"
      >
        <Logo collapsed={collapsed} />
        <Button
          className="sidebar__toggle"
          onClick={CollapseSidebar}
          appearance="transparent"
        >
          {collapsed ? (
            <ArrowCircleRight32Regular />
          ) : (
            <ArrowCircleLeft32Regular />
          )}
        </Button>
      </div>
      <div className="sidebar__body">
        {AppRoutes.map((route) => (
          <SidebarLink to={route.path}>
            {route.icon}
            <span style={{ opacity: collapsed ? 0 : 1 }}>{route.title}</span>
          </SidebarLink>
        ))}
      </div>
      <div className="sidebar__footer">
        <Button className="sidebar__logout" appearance="transparent">
          <ArrowExitRegular />
          <span style={{ opacity: collapsed ? 0 : 1 }}>Logout</span>
        </Button>
      </div>
    </StyledSidebarWrapper>
  );
};

export default Sidebar;
