import React from "react";
import Wrapper from './styles';
import { Sidebar, Title } from "../components";

const Home = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Title> Check your new letters </Title>
    </Wrapper>
  );
};

export default Home;
