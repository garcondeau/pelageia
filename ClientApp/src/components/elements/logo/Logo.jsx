import React from "react";

import { StyledLogoWrapper } from "./styledLogo";

import logo from "../../../assets/images/logo.svg";

const Logo = () => {
  return (
      <StyledLogoWrapper to="/">
        <img src={logo} alt="Pelageia logo" />
        PELAGEIA
      </StyledLogoWrapper>
  );
};

export default Logo;
