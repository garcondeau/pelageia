import styled from "styled-components";
import { Button } from "@fluentui/react-components";

export const StyledProgressWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  div:nth-child(${({ value }) => (value ? "-n+" + value : "0n")}) {
    color: #00cc6a;
    &:after {
      color: #00cc6a;
    }
  }
`;

export const StyledProgressBreakpoint = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    &:after {
      content: "";
      width: 0;
    }
  }
  &:after {
    content: ">";
    font-size: 32px;
    width: 30px;
    height: 100%;
  }
`;
