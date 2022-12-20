import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";

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
const StyledProj = styled.h1`
  font-size: 30px;
  margin-top: 10px;
  font-weight: 600;
  font-family: "Amita";

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.15);
  }
`;

const StyledTrademark = styled.h1`
  font-size: 30px;
  margin-right: 50;
  font-weight: 500;
  font-family: Helvetica, sans-serif;
  position: relative;
  left: -50px;
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
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Center = styled.span`
  position: absolute;
  top: ${(props) => (props.click ? "79%" : "50%")};
  left: ${(props) => (props.click ? "93.5%" : "50%")};
  transform: translate(-50%, -50%);

  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  .spline {
    margin: 0;
    transform: ${(props) => (props.click ? "scale(0.4)" : "")};
    @media screen and (max-width: 600px) {
      transform: ${(props) => (props.click ? "scale(0.15)" : "scale(0.75)")};
      top: ${(props) => (props.click ? "85%" : "50%")};
      left: ${(props) => (props.click ? "90%" : "50%")};
    }
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <NavBar>
          <PowerButton theme={click ? "dark" : "light"} />
          <motion.div
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          ></motion.div>

          <WORK to="/work" click={+click}>
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
            >
              <StyledProj>Projects</StyledProj>
            </motion.h2>
          </WORK>
        </NavBar>
        <SocialIcons theme={click ? "dark" : "light"} />

        <Center click={click}>
          <Spline
            className="spline"
            scene="https://prod.spline.design/0qSRJ3dERKmyQKOZ/scene.splinecode"
            onClick={() => handleClick()}
          />
        </Center>

        <BottomBar>
          <motion.h2
            initial={{
              y: 200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
          >
            <StyledTrademark>© Kiriti Aryal 2022</StyledTrademark>
          </motion.h2>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
