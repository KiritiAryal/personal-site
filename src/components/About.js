import React from "react";
import styled from "styled-components";
import Resume from "../assets/Images/KiritiAryalResume.pdf";
import ResumeIcon from "../assets/Images/cv.png";

import "./About.css";
const Card = styled.div`
  width: 600px;
  height: 60px;
  background-color: whitesmoke;
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;

const BigText = styled.h1`
  position: relative;
  top: 5%;
  color: rgba(0, 0, 0, 0.16);
  font-size: calc(5rem + 5vw);
  z-index: 0;
  @media screen and (max-width: 600px) {
    position: relative;
    left: 3%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 1024px) {
    gap: 1rem;
  }
`;
const Text = styled.h1`
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  font-family: "Karla";
  @media screen and (max-width: 600px) {
    width: 50%;
  }
`;
function About1() {
  return (
    <>
      <section className="about" id="about">
        <div className="about-text">
          <BigText>About</BigText>
          <p>
            I have enjoyed working and learning technology because it allows me
            to leverage my technical and creative sides to solve interesting and
            complex problems. I thrive in diverse environments and believe in
            the mindset that rainbows would not be so mesmerizing with just one
            color in the spectrum. I am always curious to learning new things
            and eager to polish my skills. I have admiration for any resource
            that is spent on me and I believe in giving back what I can. I like
            to mix in with any team I am working with. I believe work
            environment is an integral part of any organization and I am very
            commited to do my part to maintain it. I also love watching movies
            from all around the world and believe art and music are an integral
            part of me and reasons I get motivated.
            <br />
            <br />
            Fun fact - I have visited two-thirds of the states in the US and
            would like to go on a solo Europe Backpacking trip before I am prone
            to falling asleep in boats. Also I speak the following languages:
            <br />
            <br />
            <div className="languages">
              <Card>
                <img
                  src="https://4.bp.blogspot.com/-xQiVfurjEqg/WzOeOJ4aTdI/AAAAAAAAol0/72y9ICam56shTYXRwaUL7vhqqbTDAM80ACLcBGAs/s1600/Flag_of_Nepal.gif"
                  alt="Nepali Flag"
                  height={40}
                  width={45}
                />
                <Text>Nepali</Text>
              </Card>
              <Card>
                <img
                  src="https://1.bp.blogspot.com/-kP6bmmixhvg/YDbA3kZ-75I/AAAAAAAA4Os/YS5VBD0fGnMgMteNDso4OWSsD-alvMyhgCLcBGAsYHQ/s0/Flag_of_India.gif"
                  alt="Indian Flag"
                  height={40}
                  width={45}
                />
                <Text>Hindi</Text>
              </Card>
              <Card>
                <img
                  src="https://1.bp.blogspot.com/-YW-zCeJaST0/YEa1KIncAPI/AAAAAAAA5Fs/MN7ZqlSZZpMWG-BVCMkBK7ZlyPGm4wdkwCLcBGAsYHQ/s0/Flag_of_the_United_States.gif"
                  alt="US Flag"
                  height={40}
                  width={45}
                />
                <Text>English</Text>
              </Card>
            </div>
          </p>
        </div>
        <div className="about-img">
          <a href={Resume} target="_blank" className="nohover">
            <Container>
              <img src={ResumeIcon} alt="ResumeIcon" height={10} width={20} />
              <p>Resume</p>
            </Container>
          </a>
        </div>
      </section>
    </>
  );
}

export default About1;
