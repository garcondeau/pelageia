import React from "react";
import LoginContainer from "./LoginContainer";
import RegisterContainer from "./RegisterContainer";
import Breadcrumbs from "../elements/breadcrumbs/Breadcrumbs";

import { StyledAuthContainer, StyledAuthBlock } from "./styledAuth";

const AuthWrapper = ({ action }) => {
  return (
    <StyledAuthContainer>
      <Breadcrumbs current={action.charAt(0).toUpperCase() + action.slice(1)} />
      <StyledAuthBlock>
        {action === "login" ? <LoginContainer /> : <RegisterContainer />}
      </StyledAuthBlock>
    </StyledAuthContainer>
  );
};

export default AuthWrapper;
