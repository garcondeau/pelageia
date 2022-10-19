import React, { useContext } from "react";
import Logo from "../logo/Logo";
import routes from "../../../routes/routes";
import { NavLink, useHistory } from "react-router-dom";

import {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledHeaderMenu,
  StyledHeaderLink,
  StyledHeaderMenuItem,
} from "./styledHeader";
import { Button } from "@fluentui/react-components";
import { Person24Regular } from "@fluentui/react-icons";
import { AuthContext } from "../../../App";

const Header = () => {
  const history = useHistory();
  const user = useContext(AuthContext);
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
        {user ? (
          <Button
            onClick={() => history.push("/")}
            shape="circular"
            className="login-btn"
            appearance="transparent"
          >
            {user[0]}
          </Button>
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
