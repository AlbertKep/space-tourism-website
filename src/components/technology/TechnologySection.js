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

// const photo = "../../../assets/technology/image-space-capsule-landscape.jpg";
const vehicle = "../../../assets/technology/image-launch-vehicle-portrait.jpg";

export default function TechnologySection() {
  return (
    <TechnologyContainer>
      <Subheading>
        <span>04</span>Space launch 101
      </Subheading>
      <ControlContainer>
        <ImageWrapper>
          <img src={vehicle} alt="Technology" />
        </ImageWrapper>
        <TechnologyInfoWrapper>
          <Dots>
            <Dot>1</Dot>
            <Dot>2</Dot>
            <Dot>3</Dot>
          </Dots>
          <Role>The Terminology..</Role>
          <Name>Space Capsule</Name>
          <RegularText>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!"
          </RegularText>
        </TechnologyInfoWrapper>
      </ControlContainer>
    </TechnologyContainer>
  );
}
