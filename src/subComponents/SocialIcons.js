import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 1s ease-out;
  position: fixed;
  bottom: 0;
  right: 2rem;
  z-index: 3;
  a > :last-child:hover {
    -ms-transform: scale(1.15);
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/KiritiAryal"}
        >
          <Github
            width={40}
            height={40}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://linkedin.com/in/kiritiaryal"}
        >
          <BsLinkedin
            size={30}
            style={{ borderRadius: "5px" }}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"mailto:diswanaryal11@gmail.com"}
        >
          <GrMail
            size={30}
            style={{ borderRadius: "12px" }}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "30vh",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
