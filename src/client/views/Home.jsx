import React from "react";
import { Wrapper, ContentWrapper } from "./styles.jsx";
import { Sidebar, Title, Description } from "../components";

const Home = () => (
  <Wrapper vertical>
    <ContentWrapper width="50%">
      <Title> Check your new letters </Title>
      <Description> CHECK THEM OUT > </Description>
    </ContentWrapper>
  </Wrapper>
);

export default Home;
