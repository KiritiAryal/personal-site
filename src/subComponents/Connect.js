import React from "react";
import { NavLink } from "react-router-dom";
import { Github } from "../components/AllSvgs";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  position: fixed;
  bottom: 0;
  left: 4rem;
  z-index: 3;
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;
function Connect() {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/KiritiAryal" }}
        >
          <Github width={40} height={40} fill="currentColor" />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://linkedin.com/in/kiritiaryal" }}
        >
          <BsLinkedin
            size={30}
            style={{ borderRadius: "5px" }}
            fill="currentColor"
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "mailto:diswanaryal11@gmail.com" }}
        >
          <GrMail
            size={30}
            style={{ borderRadius: "12px" }}
            fill="currentColor"
          />
        </NavLink>
      </div>
      <Line />
    </Icons>
  );
}

export default Connect;
