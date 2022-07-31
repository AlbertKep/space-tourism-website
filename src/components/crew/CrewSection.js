import {
  CrewContainer,
  ControlContainer,
  CrewImageWrapper,
  CrewInfoWrapper,
  Dots,
  Dot,
} from "./CrewSection.styled";
// import { ImageWrapper } from "../layout/Layout.styled";
import { Subheading } from "../../styles/Subheading.styled";
import { RegularText } from "../../styles/RegularText.styled";
import { Role } from "../../styles/Role.styled";
import { Name } from "../../styles/Name.styled";

import data from "../../data.json";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const crew = data.crew;
const defaultCrew = crew[0];
const activeCrewStyle = "#ffffff";

const routerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const imageVariants = {
  slideIn: { opacity: 0, x: -50 },
  animateSlide: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  slideOut: { opacity: 0, x: 50 },
};

export default function CrewSection() {
  const [currentCrew, setCurrentCrew] = useState(defaultCrew);

  const setCrew = (currentSelectedCrew) => {
    const person = crew.find(({ name }) => name === currentSelectedCrew);
    if (person) setCurrentCrew(person);
  };

  return (
    <CrewContainer
      as={motion.section}
      variants={routerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Subheading>
        <span>03</span> meet your crew
      </Subheading>
      <ControlContainer>
        <AnimatePresence exitBeforeEnter>
          <CrewImageWrapper
            key={currentCrew.name}
            as={motion.div}
            variants={imageVariants}
            initial="slideIn"
            animate="animateSlide"
            exit="slideOut"
          >
            <img src={currentCrew.images.png} alt="Person" />
          </CrewImageWrapper>
        </AnimatePresence>
        <CrewInfoWrapper>
          <Dots>
            {crew.map((person) => (
              <Dot
                key={person.name}
                onClick={() => setCrew(person.name)}
                active={
                  person.name === currentCrew.name ? activeCrewStyle : "#707070"
                }
              />
            ))}
          </Dots>
          <Role>{currentCrew.role}</Role>
          <Name>{currentCrew.name}</Name>
          <RegularText>{currentCrew.bio}</RegularText>
        </CrewInfoWrapper>
      </ControlContainer>
    </CrewContainer>
  );
}
