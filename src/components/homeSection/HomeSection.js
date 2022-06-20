import {
  HomeHeader,
  HomeContentContainer,
  MainHeading,
  HomeButtonContainer,
  HomeButton,
} from "./HomeSection.styled";

import { Subheading } from "../../styles/Subheading.styled";
import { RegularText } from "../../styles/RegularText.styled";

const HomeSection = () => {
  return (
    <HomeHeader>
      <HomeContentContainer>
        <Subheading>So, you want to travel to</Subheading>
        <MainHeading>Space</MainHeading>
        <RegularText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </RegularText>
      </HomeContentContainer>
      <HomeButtonContainer>
        <HomeButton>Explore</HomeButton>
      </HomeButtonContainer>
    </HomeHeader>
  );
};

export default HomeSection;
