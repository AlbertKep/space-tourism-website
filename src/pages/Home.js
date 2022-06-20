import HomeSection from "../components/homeSection/HomeSection";
import { SectionWrapper } from "../components/layout/Layout.styled";

import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <SectionWrapper
      bgMobile={bgMobile}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <HomeSection />;
    </SectionWrapper>
  );
};

export default Home;
