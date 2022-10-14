import styled from "styled-components";
import { StyledContainer } from "../../components/styled/styledContainer";
import background from "../../assets/images/backgrounds/Image.png";

export const StyledHomeContainer = styled(StyledContainer)`
  margin-top: 0;
`;

export const StyledTopSection = styled.div`
  height: 600px;
  background: url(${background});
  background-size: 200%;
  background-position-y: -100px;
  position: relative;
`;

export const StyledBackgroundImage = styled.img`
    position: absolute;
    width: 300px;
    height: 300px;
    top: ${({ top }) => (top ? top + "px" : "auto")};
    left: ${({ left }) => (left ? left + "px" : "auto")};
    right: ${({ right }) => (right ? right + "px" : "auto")};
    bottom: ${({ bottom }) => (bottom ? bottom + "px" : "auto")};
`