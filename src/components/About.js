import React from "react";
import styled from "styled-components";
import Resume from "../assets/Images/KiritiAryalResume.pdf";
import ResumeIcon from "../assets/Images/cv.png";

import "./About.css";
const Card = styled.div`
  width: 600px;
  height: 65px;
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
      <div className='about'>
        <BigText>About</BigText>
        <p>
          I'm drawn to technology because it's this incredible canvas where I
          can blend my technical prowess with a splash of creativity to tackle
          intriguing challenges. Diversity is my jam – just like a rainbow loses
          its magic with one color, I thrive in varied environments. Learning is
          my perpetual quest, and every resource invested in me is met with
          gratitude and a commitment to give back. I see the work environment as
          a crucial element, and I'm fully devoted to doing my part in nurturing
          it within any organization. I'm super excited about the idea of
          bringing my skills and limitless potential for growth to your awesome
          company.
          <br />
          <br />
          I'm not just about the professional life, though. I bring a ton of
          passion to everything I do, always pushing myself to be the best
          version I can be.
          <br />
          <br />
          I am grateful to myself for taking a fantastic two-month break for
          some post-graduation travel adventures. In my downtime, you'll find me
          out in nature, hiking and soaking up the great outdoors. I'm also a
          bit of a culture enthusiast, always eager to dive into new experiences
          and learn from different walks of life. Oh, and let's not forget my
          love for the open road – nothing beats the thrill of a good motorcycle
          ride!
          <br />
          <br />
          One significant aspect of giving back has been my volunteer
          experiences. I've dedicated my time to organizations like{" "}
          <b>Feed My Starving Children (FMSC)</b>, where I contributed to the
          noble cause of providing meals to hungry kids, and{" "}
          <b>Computers for the Blind (CFTB)</b>, where I played a role in making
          technology accessible to visually impaired individuals. These
          experiences have not only enriched my understanding of community
          service but have also allowed me to apply my technical skills in
          meaningful ways.
          <br />
          <br />
          Dropping some fun facts about me! Started from humble beginnings,
          funded my own adventures, ticking off two-thirds of US states and 4
          countries. Next up? Solo backpacking through Europe before my knees
          and spine decide to retire!
          <br />
          Oh, and I'm fluent in a few languages:
          <br />
          <br />
          <div className='container'>
            <div className='languages'>
              <Card>
                <img
                  src='https://4.bp.blogspot.com/-xQiVfurjEqg/WzOeOJ4aTdI/AAAAAAAAol0/72y9ICam56shTYXRwaUL7vhqqbTDAM80ACLcBGAs/s1600/Flag_of_Nepal.gif'
                  alt='Nepali Flag'
                  height={40}
                  width={45}
                />
                <Text>Nepali</Text>
              </Card>
              <Card>
                <img
                  src='https://1.bp.blogspot.com/-kP6bmmixhvg/YDbA3kZ-75I/AAAAAAAA4Os/YS5VBD0fGnMgMteNDso4OWSsD-alvMyhgCLcBGAsYHQ/s0/Flag_of_India.gif'
                  alt='Indian Flag'
                  height={40}
                  width={45}
                />
                <Text>Hindi</Text>
              </Card>
              <Card>
                <img
                  src='https://1.bp.blogspot.com/-YW-zCeJaST0/YEa1KIncAPI/AAAAAAAA5Fs/MN7ZqlSZZpMWG-BVCMkBK7ZlyPGm4wdkwCLcBGAsYHQ/s0/Flag_of_the_United_States.gif'
                  alt='US Flag'
                  height={40}
                  width={45}
                />
                <Text>English</Text>
              </Card>
            </div>
            <div className='resume'>
              <a href={Resume} target='_blank' className='nohover'>
                <img src={ResumeIcon} alt='ResumeIcon' height={10} width={20} />
              </a>
            </div>
          </div>
        </p>
      </div>
    </>
  );
}

export default About1;
