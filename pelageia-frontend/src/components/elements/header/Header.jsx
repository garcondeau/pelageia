import React, { useContext } from "react";
import Logo from "../logo/Logo";
import { HeaderContext } from "../../../App";
import { NavLink, useHistory } from "react-router-dom";
import { getMe } from "../../../utils/getMe";
import { initLogout } from "../../../utils/logoutEvent";

import {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledHeaderMenu,
  StyledHeaderLink,
  StyledHeaderMenuItem,
} from "./styledHeader";
import { Button, Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from "@fluentui/react-components";
import { Person24Regular } from "@fluentui/react-icons";

const Header = () => {
  const history = useHistory();
  const routes = useContext(HeaderContext);
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledHeaderMenu>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Logo />
          </NavLink>
          {routes.map((route, key) => (
            <StyledHeaderMenuItem key={key}>
              {route.menu && (
                <StyledHeaderLink key={key} to={route.path}>
                  {route.title}
                </StyledHeaderLink>
              )}
            </StyledHeaderMenuItem>
          ))}
        </StyledHeaderMenu>
        {getMe() !== null ? (
          <Menu>
            <MenuTrigger>
              <Button
                shape="circular"
                className="login-btn"
                appearance="transparent"
              >
                {getMe().name}
              </Button>
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem onClick={() => history.push("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem
                onClick={() =>initLogout()}
                >
                  Sign out
                  </MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        ) : (
          <Button
            onClick={() => history.push("/login")}
            shape="circular"
            className="login-btn"
            appearance="transparent"
            icon={<Person24Regular />}
          />
        )}
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
