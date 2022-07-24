import { SectionWrapper } from "../components/layout/Layout.styled";
import HomeSection from "../components/home/HomeSection";

import { motion } from "framer-motion";

const bgMobile = "../assets/home/background-home-mobile.jpg";
const bgTablet = "../assets/home/background-home-tablet.jpg";
const bgDesktop = "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <SectionWrapper
      bgmobile={bgMobile}
      bgtablet={bgTablet}
      bgdesktop={bgDesktop}
      as={motion.section}
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5, transition: { duration: 0.1 } }}
    >
      <HomeSection />
    </SectionWrapper>
  );
};

export default Home;
