import { SectionWrapper } from "../components/layout/Layout.styled";

import DestinationSection from "../components/destination/DestinationSection";

const bgMobile = "../assets/destination/background-destination-mobile.jpg";
const bgTablet = "../assets/destination/background-destination-tablet.jpg";
const bgDesktop = "../assets/destination/background-destination-desktop.jpg";

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
