import React, { useState } from "react";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            {/* <ScrollAnimation animateIn="fadeIn" > */}
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Vansh.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'An aspiring Software Developer.',
                    1000,
                    'An aspiring Frontend Developer.',
                    1000,
                    'An aspiring Data Analyst.',
                    1000,
                    'A problem solver.',
                    1000
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }

          </HeroLeft>
          <HeroRight>
              <img 
                src="https://github.com/vansh190302/Extra-Files/blob/main/React%20js/Portfolio/myself.png?raw=true"
                alt="Vansh" width="auto" height="200px"
              />
          </HeroRight>
        </HeroWrapper>
      </HeroContainer>
    </main>
  );
}

export default Hero;
