import {
  DestinationContainer,
  PlanetContainer,
  DestinationSubheading,
  PlanetImageContainer,
  PlanetInfo,
  PlanetsList,
  PlanetsItem,
  PlanetName,
  PlanetDetails,
  DetailsWrapper,
} from "./DestinationSection.styled";

import { RegularText } from "../../styles/RegularText.styled";

import data from "../../data.json";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const destinations = data.destinations;
const defaultPlanet = destinations[0];
const activePlanetStyle = "1px solid #fff";

const routerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const textVariants = {
  slideIn: { opacity: 0, x: -50 },
  animateSlide: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
  slideOut: { opacity: 0, x: "100vw" },
};

const rotatePlanet = {
  rotate: 360,
  transition: {
    type: "ease",
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  },
};

export default function DestinationSection() {
  const [currentPlanet, setCurrentPlanet] = useState(defaultPlanet);

  const setPlanet = (currentSelectedPlanet) => {
    const planet = destinations.find(
      ({ name }) => name === currentSelectedPlanet
    );
    if (planet) setCurrentPlanet(planet);
    console.log(planet);
  };

  return (
    <DestinationContainer
      as={motion.section}
      variants={routerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <PlanetContainer>
        <DestinationSubheading>
          <span>02</span>Pick up your Destination
        </DestinationSubheading>

        <PlanetImageContainer>
          <motion.img
            src={currentPlanet.images.png}
            alt={currentPlanet.name}
            animate={rotatePlanet}
          />
        </PlanetImageContainer>
      </PlanetContainer>

      <PlanetInfo>
        <PlanetsList>
          {destinations.map((planet) => (
            <PlanetsItem
              key={planet.name}
              onClick={() => setPlanet(planet.name)}
              active={
                planet.name === currentPlanet.name
                  ? activePlanetStyle
                  : "transparent"
              }
            >
              {planet.name}
            </PlanetsItem>
          ))}
        </PlanetsList>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentPlanet.name}
            variants={textVariants}
            initial="slideIn"
            animate="animateSlide"
            exit="slideOut"
          >
            <PlanetName>{currentPlanet.name}</PlanetName>
            <RegularText>{currentPlanet.description}</RegularText>

            <PlanetDetails>
              <DetailsWrapper>
                <span>Avg. Distance</span>
                <span>{currentPlanet.distance}</span>
              </DetailsWrapper>

              <DetailsWrapper>
                <span>Est. time travel</span>
                <span>{currentPlanet.travel}</span>
              </DetailsWrapper>
            </PlanetDetails>
          </motion.div>
        </AnimatePresence>
      </PlanetInfo>
    </DestinationContainer>
  );
}
