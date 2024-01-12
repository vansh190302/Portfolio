import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <center>
          <img
            src="https://github.com/vansh190302/Extra-Files/blob/main/React%20js/Portfolio/About%20me.png?raw=true"
            alt="Vansh" width="auto" height="200px"
          /></center>
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hi! My name is <strong>Vansh Kushwaha</strong><br/>
            I am currently a final year student pursuing my B.tech in Computer Science Engineering from Kalinga Institute of Industrial Technology.<br/>
            My experience with computer science has been shaped by my intense interest in problem-solving and Data analysis. I've refined my skills in languages required for me to achieve success in future. I have an high interest  from solving intricate algorithms to creating scalable web applications and analyzing data using various data techniques. Using these abilities, I hope to create reliable and effective software solutions that tackle practical problems. 
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeft">
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
