import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledLogoWrapper = styled(NavLink)`
  color: #323130;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  align-items: center;
  grid-gap: 5px;

  &:hover {
    color: #323130;

    img {
      transform: rotate(180deg);
    }
  }

  img {
    max-height: 40px;
    height: 100%;
    transition: 0.5s;
  }

  span {
    transition: opacity 0.25s
  }
`;
