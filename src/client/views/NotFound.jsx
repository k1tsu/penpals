import React from "react";
import { ContentWrapper, Wrapper } from "./styles";
import { Description } from "../components";

const NotFound = () => (
  <Wrapper>
    <ContentWrapper width="100%">
      <Description>Content not available</Description>
    </ContentWrapper>
  </Wrapper>
);

export default NotFound;
