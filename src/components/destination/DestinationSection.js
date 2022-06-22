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

import moon from "../../assets/destination/image-moon.png";
import { RegularText } from "../../styles/RegularText.styled";

export default function DestinationSection() {
  return (
    <DestinationContainer>
      <PlanetContainer>
        <Subheading>
          <span>01</span>Pick up your Destination
        </Subheading>

        <PlanetImageContainer>
          <img src={moon} alt="Moon" />
        </PlanetImageContainer>
      </PlanetContainer>

      <PlanetInfo>
        <PlanetsList>
          <PlanetsItem>Moon</PlanetsItem>
          <PlanetsItem>Mars</PlanetsItem>
          <PlanetsItem>Europa</PlanetsItem>
          <PlanetsItem>Titan</PlanetsItem>
        </PlanetsList>
        <PlanetName>Moon</PlanetName>
        <RegularText>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </RegularText>

        <PlanetDetails>
          <DetailsWrapper>
            <span>Avg. Distance</span>
            <span>384,400 km</span>
          </DetailsWrapper>

          <DetailsWrapper>
            <span>Est. time travel</span>
            <span>3 days</span>
          </DetailsWrapper>
        </PlanetDetails>
      </PlanetInfo>
    </DestinationContainer>
  );
}
