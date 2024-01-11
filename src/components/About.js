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
  gap: 1rem;
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
      <section className='about' id='about'>
        <div className='about-text'>
          <BigText>About</BigText>
          <p>
            After taking a fantastic two-month break for some post-graduation
            travel adventures, I'm now on the lookout for exciting full-time job
            opportunities. In my downtime, you'll find me out in nature, hiking
            and soaking up the great outdoors. I'm also a bit of a culture
            enthusiast, always eager to dive into new experiences and learn from
            different walks of life. Oh, and let's not forget my love for the
            open road – nothing beats the thrill of a good motorcycle ride!
            <br />
            <br />
            I'm not just about the fun stuff, though. I bring a ton of passion
            to everything I do, always pushing myself to be the best version I
            can be. Now, I'm super excited about the idea of bringing my skills
            and unlimited potential for growth to your awesome company.
            <br />
            <br />
            I'm drawn to technology because it's this incredible canvas where I
            can blend my technical prowess with a splash of creativity to tackle
            intriguing challenges. Diversity is my jam – just like a rainbow
            loses its magic with one color, I thrive in varied environments.
            Learning is my perpetual quest, and every resource invested in me is
            met with gratitude and a commitment to give back. I see the work
            environment as a crucial element, and I'm fully devoted to doing my
            part in nurturing it within any organization.
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
          </p>
        </div>
        <div className='about-img'>
          <a href={Resume} target='_blank' className='nohover'>
            <Container>
              <img src={ResumeIcon} alt='ResumeIcon' height={10} width={20} />
              <p>Resume</p>
            </Container>
          </a>
        </div>
      </section>
    </>
  );
}

export default About1;
