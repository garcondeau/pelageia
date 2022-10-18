import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IosArrowRtl24Regular } from "@fluentui/react-icons";

export const StyledBreadcrumbsList = styled.div`
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 15px;
  color: #323130;
`;

export const Separator = styled(IosArrowRtl24Regular)`
  width: 32px;
  height: 16px;
  padding: 0 5px;
`;

export const StyledBreadcrumbItem = styled(NavLink)`
  text-decoration: none;
  &:visited {
    text-decoration: none;
    color: #323130;
  }
  &:hover {
    color: #0b528f;
  }
  &.active-link {
    color: #0f6cbd;
  }
`;
