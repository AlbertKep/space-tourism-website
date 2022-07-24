import { SectionWrapper } from "../components/layout/Layout.styled";
import CrewSection from "../components/crew/CrewSection";

import { motion } from "framer-motion";

const bgMobile = "../assets/crew/background-crew-mobile.jpg";
const bgTablet = "../assets/crew/background-crew-tablet.jpg";
const bgDesktop = "../assets/crew/background-crew-desktop.jpg";

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
      <CrewSection />
    </SectionWrapper>
  );
}
