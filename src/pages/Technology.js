import { SectionWrapper } from "../components/layout/Layout.styled";
import TechnologySection from "../components/technology/TechnologySection";

const bgMobile = "../assets/technology/background-technology-mobile.jpg";
const bgTablet = "../assets/technology/background-technology-tablet.jpg";
const bgDesktop = "../assets/technology/background-technology-desktop.jpg";

export default function Crew() {
  return (
    <SectionWrapper
      bgMobile={bgMobile}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <TechnologySection />
    </SectionWrapper>
  );
}
