import React from "react";

import { StyledLogoWrapper } from "./styledLogo";

import logo from "../../../assets/images/logo.svg";

const Logo = () => {
    return(
        <StyledLogoWrapper>
            <img src={logo} alt="Pelageia logo" />
            <span>Pelageia</span>
        </StyledLogoWrapper>
    )
}

export default Logo;