import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.jpg";
import Typewriter from "typewriter-effect";
import "./Intro.css";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;
  @media screen and (max-width: 600px) {
    top: 56%;
  }
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid #b0d3e9;
  border-top: 2px solid #b0d3e9;
  border-bottom: 2px solid #b0d3e9;
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  overflow-y: hidden;
  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 1.3rem;
  cursor: text;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "71vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("...aspiring Full-Stack Developer")
                .pauseFor(500)
                .deleteAll()
                .start()
                .typeString("...passionate Student")
                .pauseFor(500)
                .deleteAll()
                .typeString("...looking for Full-Time Opportunities")
                .pauseFor(500)
                .deleteAll();
            }}
          />
          <h6>
            I currently go to Texas Tech University in Lubbock, Texas. I
            graduate May, 2023. I love riding motorcycles and hiking. Feel free
            to connect with me and check out my works
            <p style={{ display: "inline" }}> &#x270C;</p>
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <img className="pic" src={Me} alt="Profile Pic" height={1000} />
      </SubBox>
    </Box>
  );
};

export default Intro;
