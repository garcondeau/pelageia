import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { StyledContainer } from "../../styled/styledContainer";

export const StyledHeaderWrapper = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(0, 111, 201);
`;

export const StyledHeaderContainer = styled(StyledContainer)`
  max-width: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .login-btn {
    color: #e6e6e6;
    transition: 0.1s;
    border: 1px solid;
    &:hover {
        color: #e6e6e6;
        background-color: #257ac5;
    }
  }
`;
export const StyledHeaderMenuItem = styled.div``;

export const StyledHeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  font-size: 13px;
`;

export const StyledHeaderLink = styled(NavLink)`
    padding: 0 8px;
    margin-right: 16px;
    color: #e6e6e6;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
        text-underline-offset: 3px;
    }
`;
