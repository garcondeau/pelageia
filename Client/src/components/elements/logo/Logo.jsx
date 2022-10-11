import React from "react";

import { StyledLogoWrapper } from "./styledLogo";

import logo from "../../../assets/images/logo.svg";

const Logo = ({ collapsed }) => {
  return (
    <StyledLogoWrapper to="/">
      <img src={logo} alt="Pelageia logo" />
      <span style={{opacity: collapsed ? 0 : 1}}>PELAGEIA</span>
    </StyledLogoWrapper>
  );
};

export default Logo;
