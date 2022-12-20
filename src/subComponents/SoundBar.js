import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ImHeadphones } from "react-icons/im";
import music from "../assets/audio/u-said-it-v13-1167.mp3";

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 50%;
  top: 3.2rem;
  z-index: 10;
  @media screen and (max-width: 600px) {
    left: 2.8rem;
    top: 7rem;
  }

  & > *:nth-child(1) {
    position: relative;
    top: -7px;
    left: -6px;
  }
  & > *:nth-child(2) {
    left: 1px;
    animation-duration: 474ms;
  }
  & > *:nth-child(3) {
    left: 5px;
    animation-duration: 433ms;
  }
  & > *:nth-child(4) {
    left: 9px;
    animation-duration: 407ms;
  }
  & > *:nth-child(5) {
    left: 13px;
    animation-duration: 458ms;
  }

  & > *:nth-child(6) {
    left: 5px;
    animation-duration: 400ms;
  }

  & > *:nth-child(7) {
    left: 21px;
    animation-duration: 427ms;
  }
  & > *:nth-child(8) {
    left: 25px;
    animation-duration: 441ms;
  }
  & > *:nth-child(9) {
    left: 29px;
    animation-duration: 419ms;
  }
  & > *:nth-child(10) {
    left: 33px;
    animation-duration: 487ms;
  }
  & > *:nth-child(11) {
    left: 37px;
    animation-duration: 442ms;
  }
`;

const Line = styled.span`
  background: #019401;
  border: #001200;
  animation: sound 0ms -800ms linear infinite alternate;
  animation-play-state: ${(props) => (props.click ? "running" : "paused")};

  width: 3px;
  margin: 0 0.1rem;
  @keyframes sound {
    0% {
      transform: scaleY(1);
      opacity: 0.35;
      height: 3px;
    }
    50% {
      transform: scaleY(2);
    }
    100% {
      transform: scaleY(1);
      opacity: 1;
      height: 28px;
    }
  }
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <>
      <Box onClick={() => handleClick()}>
        <ImHeadphones size={25} color="#9932CC" />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <Line click={click} />
        <audio src={music} ref={ref} loop />
      </Box>
    </>
  );
};

export default SoundBar;
