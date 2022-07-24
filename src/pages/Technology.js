import { SectionWrapper } from "../components/layout/Layout.styled";
import TechnologySection from "../components/technology/TechnologySection";

import { motion } from "framer-motion";

const bgMobile = "../assets/technology/background-technology-mobile.jpg";
const bgTablet = "../assets/technology/background-technology-tablet.jpg";
const bgDesktop = "../assets/technology/background-technology-desktop.jpg";

export default function Crew() {
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
      <TechnologySection />
    </SectionWrapper>
  );
}
