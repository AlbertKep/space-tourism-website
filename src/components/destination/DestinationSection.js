import { Subheading } from "../../styles/Subheading.styled";
import {
  DestinationContainer,
  PlanetContainer,
  PlanetImageContainer,
  PlanetInfo,
  PlanetsList,
  PlanetsItem,
  PlanetName,
  PlanetDetails,
  DetailsWrapper,
} from "./DestinationSection.styled";

// import moon from "../../assets/destination/image-moon.png";
import { RegularText } from "../../styles/RegularText.styled";

import data from "../../data.json";
import { useState, useEffect } from "react";

const destinations = data.destinations;

export default function DestinationSection() {
  const [currentNamePlanet, setCurrentNamePlanet] = useState("Moon");
  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);

  useEffect(() => {
    const changePlanet = () => {
      const planet = destinations.filter((planet) => {
        return planet.name === currentNamePlanet;
      });

      setCurrentPlanet(planet[0]);
    };

    changePlanet();
  }, [currentNamePlanet]);

  return (
    <DestinationContainer>
      <PlanetContainer>
        <Subheading>
          <span>01</span>Pick up your Destination
        </Subheading>

        <PlanetImageContainer>
          <img src={currentPlanet.images.png} alt="Moon" />
        </PlanetImageContainer>
      </PlanetContainer>

      <PlanetInfo>
        <PlanetsList>
          <PlanetsItem onClick={() => setCurrentNamePlanet("Moon")}>
            Moon
          </PlanetsItem>
          <PlanetsItem onClick={() => setCurrentNamePlanet("Mars")}>
            Mars
          </PlanetsItem>
          <PlanetsItem onClick={() => setCurrentNamePlanet("Europa")}>
            Europa
          </PlanetsItem>
          <PlanetsItem onClick={() => setCurrentNamePlanet("Titan")}>
            Titan
          </PlanetsItem>
        </PlanetsList>
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
      </PlanetInfo>
    </DestinationContainer>
  );
}
