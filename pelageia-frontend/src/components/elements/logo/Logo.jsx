import React from "react";

import { StyledLogoWrapper } from "./styledLogo";

import { GridDots20Filled } from "@fluentui/react-icons";

const Logo = () => {
  return (
    <StyledLogoWrapper>
      <GridDots20Filled/>
      <span>Pelageia 6 Panel</span>
    </StyledLogoWrapper>
  );
};

export default Logo;
