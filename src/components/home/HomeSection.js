import {
  HomeHeader,
  HomeContentContainer,
  MainHeading,
  HomeButtonContainer,
  HomeButton,
} from "./HomeSection.styled";

import { Subheading } from "../../styles/Subheading.styled";
import { RegularText } from "../../styles/RegularText.styled";
import { motion } from "framer-motion";

const routerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const homeContentVariants = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

const HomeSection = () => {
  return (
    <HomeHeader
      as={motion.header}
      variants={routerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HomeContentContainer as={motion.div} variants={homeContentVariants}>
        <Subheading>So, you want to travel to</Subheading>
        <MainHeading>Space</MainHeading>
        <RegularText>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </RegularText>
      </HomeContentContainer>
      <HomeButtonContainer as={motion.div} variants={imageVariants}>
        <HomeButton>Explore</HomeButton>
      </HomeButtonContainer>
    </HomeHeader>
  );
};

export default HomeSection;
