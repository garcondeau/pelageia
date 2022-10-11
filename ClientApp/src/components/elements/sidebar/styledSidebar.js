import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledSidebarWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  padding: 10px 0 0 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(30px);
  background-clip: padding-box;
  box-shadow: 5px 0 10px rgba(46, 54, 68, 0.1);
  transition: width 0.5s;

  .sidebar {
    &__header {
      width: 100%;
      margin-right: 15px;
      display: flex;
      justify-content: space-between;
      transition: flex-direction 0.2s;
    }

    &__toggle,
    &__logout {
      min-width: 40px;
      padding-left: 0;
      padding-right: 20px;
      font-size: 32px;
    }

    &__body {
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    &__footer {
      span {
        font-size: 18px;
        transition: opacity 0.3s;
      }
    }
  }
`;

export const SidebarLink = styled(NavLink)`
  padding: 5px 0 5px 3px;
  color: #323130;
  text-decoration: none;
  font-size: 18px;
  overflow: hiden;
  white-space: nowrap;

  span {
    padding-left: 5px;
    color: #018574;
    transition: opacity 0.3s;
  }
`;
