import { SectionWrapper } from "../components/layout/Layout.styled";

import DestinationSection from "../components/destination/DestinationSection";

import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";

export default function Destination() {
  return (
    <SectionWrapper
      bgMobile={bgMobile}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <DestinationSection />
    </SectionWrapper>
  );
}
