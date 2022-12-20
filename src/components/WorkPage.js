import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import PowerButton from "../subComponents/PowerButton";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import ParticlesComponent from "../subComponents/ParticleComponent";

const Contain = styled.div`
  align-self: flex-start;
  margin-top: 30px;
`;
const Box = styled.div`
  background-color: rgb(15, 22, 36);
  height: 450vh;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 22rem;
  left: calc(3rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  @media screen and (max-width: 600px) {
    top: 24rem;
  }
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Contain>
          <PowerButton theme="dark" />
        </Contain>

        <ParticlesComponent theme="dark" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <BigTitle text="My Projects" top="15%" right="3%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
