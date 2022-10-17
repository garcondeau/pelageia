import React from "react";
import Logo from "../logo/Logo";
import routes from "../../../routes/routes";

import {
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledHeaderMenu,
  StyledHeaderLink,
  StyledHeaderMenuItem,
} from "./styledHeader";
import { Button } from "@fluentui/react-components";
import { Person24Regular } from "@fluentui/react-icons";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <StyledHeaderMenu>
          <Logo />
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
        <Button
          shape="circular"
          className="login-btn"
          appearance="transparent"
          icon={<Person24Regular />}
        />
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};

export default Header;
