import styled from "styled-components";

export const SectionWrapper = styled.div`
  height: 100vh;
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
    display: flex;
    align-items: center;
  }
`;

export const InfoWrapper = styled.div`
  text-align: center;
  margin-top: 1.5em;
  padding: 0 1.5em;

  @media only screen and (min-width: 992px) {
    text-align: left;
    margin: auto;
  }
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 2.5em;

  img {
    width: 40%;

    @media only screen and (min-width: 480px) {
      width: 25%;
    }

    @media only screen and (min-width: 992px) {
      width: 60%;
      max-width: 350px;
      /* height: 350px; */
    }
  }
  /* 
  img {
    width: 100%;
    max-width: 250px;

    @media only screen and (min-width: 992px) {
      max-width: 350px;
    }
  } */
`;
