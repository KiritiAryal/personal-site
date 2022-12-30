import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Container = styled.div`
  position: fixed;
  display: flex;
  gap: 20px;
  left: 2rem;
  z-index: 3;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  &:hover {
    -ms-transform: scale(1.01);
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    opacity: 0.7;
  }
`;
const Logo = styled.h1`
  font-family: "Amita";
  transition: 0.2s ease;
  font-size: 30px;
  margin-top: 10px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const Initial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 3px solid
    ${(props) => (props.color === "dark" ? DarkTheme.text : DarkTheme.body)};
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
`;
function PowerButton(props) {
  return (
    <Container color={props.theme}>
      <Initial color={props.theme}>
        <h2 style={{ fontFamily: "Amita" }} color={props.theme}>
          KA
        </h2>
      </Initial>
      <Logo>किरिटिअर्याल</Logo>
    </Container>
  );
}

export default PowerButton;
