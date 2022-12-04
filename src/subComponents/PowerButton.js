import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  gap: 20px;
  left: 4rem;

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    opacity: 0.7;
  }
`;
const Logo = styled.h1`
  color: ${(props) => props.theme.text};
  font-family: "Amita";
  transition: 0.2s ease;
  font-size: 30px;
`;
const Initial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 3px solid black;
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
`;
function PowerButton() {
  return (
    <NavLink to="/">
      <Container>
        <Initial>
          <h2 style={{ color: "#000", fontFamily: "Amita" }}>KA</h2>
        </Initial>
        <Logo>किरिटिअर्याल</Logo>
      </Container>
    </NavLink>
  );
}

export default PowerButton;
