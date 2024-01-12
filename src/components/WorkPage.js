import React, { useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import BigTitle from "../subComponents/BigTitle";
import ParticlesComponent from "../subComponents/ParticleComponent";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Box = styled.div`
  background-color: rgb(15, 22, 36);
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  position: relative;
`;

const Main = styled(motion.ul)`
  position: absolute;

  padding-left: 30%;
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 5rem;
  left: 8rem;
  height: 40vh;
  display: flex;
  color: white;
  @media screen and (max-width: 600px) {
    top: 6rem;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const WorkPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box ref={ref} id='work'>
        <ParticlesComponent theme='dark' />
        <Main data-scroll ref={Horizontalref}>
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <BigTitle text='My Projects' top='5%' left='3%' />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
