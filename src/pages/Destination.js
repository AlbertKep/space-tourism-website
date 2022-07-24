import { SectionWrapper } from "../components/layout/Layout.styled";
import DestinationSection from "../components/destination/DestinationSection";

import { motion } from "framer-motion";

const bgMobile = "../assets/destination/background-destination-mobile.jpg";
const bgTablet = "../assets/destination/background-destination-tablet.jpg";
const bgDesktop = "../assets/destination/background-destination-desktop.jpg";

export default function Destination() {
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
      <DestinationSection />
    </SectionWrapper>
  );
}
