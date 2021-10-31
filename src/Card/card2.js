import React from "react";
import Card from "./card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
function card2() {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
    </Container>
  );
}

export default card2;
