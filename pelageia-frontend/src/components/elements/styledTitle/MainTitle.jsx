import React from "react";

import { StyledTitleWrapper } from "./styledTitle";

const MainTitle = ({text}) => {
    return(
        <StyledTitleWrapper>
            <span>{text}</span>
        </StyledTitleWrapper>
    )
}

export default MainTitle;