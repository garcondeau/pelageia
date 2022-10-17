import React from "react";

import image1 from "../../assets/images/Tables.svg";
import image2 from "../../assets/images/Folder.svg";
import { StyledTopSection, StyledHomeContainer, StyledBackgroundImage } from "./styledHome";
import { Display, Title3 } from "@fluentui/react-components";
import {
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
} from "@fluentui/react-components/unstable";

const HomeWrapper = () => {
  
    return (
    <StyledTopSection>
      <StyledHomeContainer>
        <StyledBackgroundImage src={image1}/>
        <StyledBackgroundImage right="100" bottom="0" src={image2}/>
        <DialogSurface>
          <DialogBody>
            <DialogTitle>
              <Display>What is Pelageia?</Display>
            </DialogTitle>
            <DialogContent>
              <Title3>
                Pelageia is the result of a long collaboration between some of
                the most talented minds in the industry. We’re on a mission to
                provide customers with fast, intelligent data processing, while
                working alongside them to reduce operational costs.
              </Title3>
            </DialogContent>
          </DialogBody>
        </DialogSurface>
      </StyledHomeContainer>
    </StyledTopSection>
  );
};

export default HomeWrapper;
