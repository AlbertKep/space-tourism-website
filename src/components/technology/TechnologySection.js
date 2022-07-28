import {
  TechnologyContainer,
  ControlContainer,
  TechnologyInfoWrapper,
  Dots,
  Dot,
} from "./TechnologySection.styled";
import { Subheading } from "../../styles/Subheading.styled";
import { ImageWrapper } from "../layout/Layout.styled";
import { Role } from "../../styles/Role.styled";
import { Name } from "../../styles/Name.styled";
import { RegularText } from "../../styles/RegularText.styled";

import data from "../../data.json";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

const technology = data.technology;
const defaultTechnology = technology[0];
const activeTechnologyStyle = { backgroundColor: "#fff", color: "#000" };

const getWindowSize = () => {
  return window.innerWidth;
};

const routerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

export default function TechnologySection() {
  const desktopWidth = 992;
  const [currentTechnology, setCurrentTechnology] = useState(defaultTechnology);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const setTechnology = (currentSelectedCrew) => {
    const technologyName = technology.find(
      ({ name }) => name === currentSelectedCrew
    );
    if (technologyName) setCurrentTechnology(technologyName);
  };

  return (
    <TechnologyContainer
      as={motion.section}
      initial={routerVariants}
      animate="hidden"
      exit="exit"
    >
      <Subheading>
        <span>04</span>Space launch 101
      </Subheading>
      <ControlContainer>
        <ImageWrapper>
          <img
            src={
              windowSize >= desktopWidth
                ? currentTechnology.images.portrait
                : currentTechnology.images.landscape
            }
            alt="Technology"
          />
        </ImageWrapper>
        <TechnologyInfoWrapper>
          <Dots>
            {technology.map((tech, index) => (
              <Dot
                key={tech.name}
                onClick={() => setTechnology(tech.name)}
                active={
                  tech.name === currentTechnology.name
                    ? activeTechnologyStyle
                    : ""
                }
              >
                {++index}
              </Dot>
            ))}
          </Dots>
          <Role>The terminology...</Role>
          <Name>{currentTechnology.name}</Name>
          <RegularText>{currentTechnology.description}</RegularText>
        </TechnologyInfoWrapper>
      </ControlContainer>
    </TechnologyContainer>
  );
}
