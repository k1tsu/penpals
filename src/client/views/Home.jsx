import React from "react";
import { Wrapper, ContentWrapper } from "./styles";
import { Title, Description, LettersCard } from "../components";

const Home = () => (
  <Wrapper>
    <ContentWrapper width="50%">
      <Title> You have new letters </Title>
      <Description> CHECK THEM OUT &gt; </Description>
    </ContentWrapper>
    <ContentWrapper width="50%">
      <LettersCard>
        <h2>testing</h2>
      </LettersCard>
    </ContentWrapper>
  </Wrapper>
);

export default Home;
