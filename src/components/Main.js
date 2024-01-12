import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";

const PowerButton = React.lazy(() => import("../subComponents/PowerButton"));

const MainContainer = styled.div`
  background: "#0F1624";
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

const StyledTrademark = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 500;
  font-family: Helvetica, sans-serif;
  position: relative;
  left: -50px;
  color: whitesmoke;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  display: flex;
  color: #f2f2f2;
  flex-direction: column;
  align-items: center;
  transition: 1s ease-out;
  position: fixed;
  bottom: 0;
  margin-bottom: 2px;
  left: 50%;
  z-index: 3;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #0f1624;
  bottom: 0;
  right: 50%;
  width: 50%;
  height: 100%;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
  const [click, setClick] = useState(false);

  return (
    <MainContainer>
      <DarkDiv />
      <Container>
        <PowerButton theme='dark' />
        <h2>Hello</h2>
        <Intro />
        <SocialIcons theme='dark' />
        <BottomBar>
          <StyledTrademark>© Kiriti Aryal 2022</StyledTrademark>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
