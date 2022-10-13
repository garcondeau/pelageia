import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { StyledContainer } from "../../styled/styledContainer";

export const StyledHeaderWrapper = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f6cbd;
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  width: 100%;
  padding: 0 65px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .login-btn {
    color: #e6e6e6;
    transition: 0.1s;
    &:hover {
        color: #e6e6e6;
        background-color: #257ac5;
    }
  }
`;
export const StyledHeaderMenuItem = styled.div``;

export const StyledHeaderMenu = styled.nav`
  display: flex;
  font-size: 13px;
`;

export const StyledHeaderLink = styled(NavLink)`
    padding: 0 0.5rem;
    color: #e6e6e6;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;
