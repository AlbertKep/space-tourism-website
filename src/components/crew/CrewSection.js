import {
  CrewContainer,
  ControlContainer,
  CrewInfoWrapper,
  Dots,
  Dot,
} from "./CrewSection.styled";
import { ImageWrapper } from "../layout/Layout.styled";
import { Subheading } from "../../styles/Subheading.styled";
import { RegularText } from "../../styles/RegularText.styled";
import { Role } from "../../styles/Role.styled";
import { Name } from "../../styles/Name.styled";

import data from "../../data.json";

import { useState } from "react";

const crew = data.crew;
const defaultCrew = crew[0];
const activeCrewStyle = "#ffffff";

export default function CrewSection() {
  const [currentCrew, setCurrentCrew] = useState(defaultCrew);

  const setCrew = (currentSelectedCrew) => {
    const person = crew.find(({ name }) => name === currentSelectedCrew);
    if (person) setCurrentCrew(person);
  };

  return (
    <CrewContainer>
      <Subheading>
        <span>03</span> meet your crew
      </Subheading>
      <ControlContainer>
        <ImageWrapper>
          <img src={currentCrew.images.png} alt="Person" />
        </ImageWrapper>
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
