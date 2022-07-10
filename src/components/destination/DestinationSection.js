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

const destinations = data.destinations;
const defaultPlanet = destinations[0];

export default function DestinationSection() {
  const [currentPlanet, setCurrentPlanet] = useState(defaultPlanet);

  const setPlanet = (currentSelectedPlanet) => {
    const planet = destinations.find(
      ({ name }) => name === currentSelectedPlanet
    );
    if (planet) setCurrentPlanet(planet);
  };

  return (
    <DestinationContainer>
      <PlanetContainer>
        <DestinationSubheading>
          <span>02</span>Pick up your Destination
        </DestinationSubheading>

        <PlanetImageContainer>
          <img src={currentPlanet.images.png} alt="Moon" />
        </PlanetImageContainer>
      </PlanetContainer>

      <PlanetInfo>
        <PlanetsList>
          {destinations.map((planet) => (
            <PlanetsItem onClick={() => setPlanet(planet.name)}>
              {planet.name}
            </PlanetsItem>
          ))}
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
