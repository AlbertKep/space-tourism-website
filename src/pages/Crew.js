import { SectionWrapper } from "../components/layout/Layout.styled";
import CrewSection from "../components/crew/CrewSection";

const bgMobile = "../assets/crew/background-crew-mobile.jpg";
const bgTablet = "../assets/crew/background-crew-tablet.jpg";
const bgDesktop = "../assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  return (
    <SectionWrapper
      bgMobile={bgMobile}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <CrewSection />
    </SectionWrapper>
  );
}
