import { SectionWrapper } from "../components/layout/Layout.styled";

import HomeSection from "../components/home/HomeSection";

const bgMobile = "../assets/home/background-home-mobile.jpg";
const bgTablet = "../assets/home/background-home-tablet.jpg";
const bgDesktop = "../assets/home/background-home-desktop.jpg";

const Home = () => {
  return (
    <SectionWrapper
      bgMobile={bgMobile}
      bgTablet={bgTablet}
      bgDesktop={bgDesktop}
    >
      <HomeSection />
    </SectionWrapper>
  );
};

export default Home;
