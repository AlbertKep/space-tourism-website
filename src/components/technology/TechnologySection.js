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

import { motion, AnimatePresence } from "framer-motion";

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

const imageVariants = {
  mobileAnimation: {
    slideIn: { opacity: 0, x: "-100vw" },
    animateSlide: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
    slideOut: { opacity: 0, x: "100vw" },
  },
  desktopAnimation: {
    slideIn: { opacity: 0, y: -100 },
    animateSlide: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    slideOut: { opacity: 0, y: 100 },
  },
};

export default function TechnologySection() {
  const desktopWidth = 992;
  const [currentTechnology, setCurrentTechnology] = useState(defaultTechnology);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  console.log("Render");
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
      variants={routerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Subheading>
        <span>04</span>Space launch 101
      </Subheading>
      <ControlContainer>
        <ImageWrapper>
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={currentTechnology.name}
              src={
                windowSize >= desktopWidth
                  ? currentTechnology.images.portrait
                  : currentTechnology.images.landscape
              }
              alt="Technology"
              variants={
                windowSize >= desktopWidth
                  ? imageVariants.desktopAnimation
                  : imageVariants.mobileAnimation
              }
              initial="slideIn"
              animate="animateSlide"
              exit="slideOut"
            />
          </AnimatePresence>
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
