import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import mainLogo from "../assets/Images/ka-logo.png";
const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;
`;

const Text = styled(motion.span)`
  display: flex;
  font-size: 50px;
  font-weight: 500;
  color: #f2f2f2;
  padding-top: 0.5rem;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 48em) {
    font-size: 30px;
  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0 }}
      transition={{ duration: 2 }}
    >
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
        <img
          src={mainLogo}
          style={{ maxWidth: "100%", minWidth: "50%", height: "200px" }}
          alt="KiritiAryalLogo"
        />
      </motion.h2>

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
        <Text> Kiriti Aryal is a...</Text>
      </motion.h2>
    </Container>
  );
};

export default Loader;
