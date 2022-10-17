import styled from "styled-components";
import { StyledContainer } from "../../components/styled/styledContainer";

export const StyledHomeContainer = styled(StyledContainer)`
  margin-top: 0;
`;

export const StyledTopSection = styled.div`
  height: 600px;
  position: relative;
  background: linear-gradient(-45deg,rgb(231 72 86 / 20%),rgb(255 140 0 / 20%),rgb(142 140 216 / 20%),rgb(0 120 215 / 20%));
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const StyledBackgroundImage = styled.img`
  position: absolute;
  width: 300px;
  height: 300px;
  top: ${({ top }) => (top ? top + "px" : "auto")};
  left: ${({ left }) => (left ? left + "px" : "auto")};
  right: ${({ right }) => (right ? right + "px" : "auto")};
  bottom: ${({ bottom }) => (bottom ? bottom + "px" : "auto")};
`;
