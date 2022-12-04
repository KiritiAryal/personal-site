import React from "react";
import styled from "styled-components";
import Connect from "../subComponents/Connect";
import PowerButton from "../subComponents/PowerButton";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #000;
  color: #fff;
  width: 100%;
  display: flex;
  height: 6vh;
  justify-content: center;
  align-items: center;
`;

function Main() {
  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <Connect />
      </Container>
      <Bottom>
        <h3 style={{ fontWeight: 500, fontFamily: "sans-serif" }}>
          © Kiriti Aryal 2022
        </h3>
      </Bottom>
    </MainContainer>
  );
}

export default Main;
