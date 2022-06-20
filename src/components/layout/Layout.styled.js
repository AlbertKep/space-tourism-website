import styled from "styled-components";

export const SectionWrapper = styled.div`
  background-image: url(${({ bgMobile }) => bgMobile});
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 468px) {
    background-image: url(${({ bgTablet }) => bgTablet});
    background-position: center;
  }

  @media only screen and (min-width: 992px) {
    background-image: url(${({ bgDesktop }) => bgDesktop});
    background-position: center;
  }
`;
