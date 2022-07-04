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

const person = "../assets/crew/image-douglas-hurley.png";
export default function CrewSection() {
  return (
    <CrewContainer>
      <Subheading>
        <span>03</span> meet your crew
      </Subheading>
      <ControlContainer>
        <ImageWrapper>
          <img src={person} alt="Person" />
        </ImageWrapper>
        <CrewInfoWrapper>
          <Dots>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
            <Dot></Dot>
          </Dots>
          <Role>Commander</Role>
          <Name>Douglas Hurley</Name>
          <RegularText>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </RegularText>
        </CrewInfoWrapper>
      </ControlContainer>
    </CrewContainer>
  );
}
