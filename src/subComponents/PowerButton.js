import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  gap: 20px;
  left: 4rem;

  &:hover {
    -ms-transform: scale(1.15);
    -webkit-transform: scale(1.15);
    transform: scale(1.15);
    opacity: 0.7;
  }
`;
const Logo = styled.h1`
  color: ${(props) => props.theme.text};
  font-family: "Amita";
  transition: transform 0.2s;

  font-size: 40px;
`;
const Initial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 3px solid black;
  padding: 0.3rem;
  width: 3rem;
  height: 3rem;
`;
function PowerButton() {
  return (
    <NavLink to="/">
      <Container>
        <Initial>
          <h1 style={{ color: "#000" }}>KA</h1>
        </Initial>
        <Logo>किरिटिअर्याल</Logo>
      </Container>
    </NavLink>
  );
}

export default PowerButton;
