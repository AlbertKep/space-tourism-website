import styled from "styled-components";
import { Subheading } from "../../styles/Subheading.styled";

export const HomeHeader = styled.header`
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    & > * {
      flex-basis: 100%;
    }
  }
`;

export const HomeContentContainer = styled.div`
  margin-top: 1em;
  padding: 0 2em;
  text-align: center;

  @media only screen and (min-width: 768px) {
    margin-top: 4em;
    padding: 0 6em;
  }

  @media only screen and (min-width: 992px) {
    text-align: left;
    padding-right: 7em;
  }
`;

export const MainHeading = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  margin: 0.3em 0 0.2em;
  letter-spacing: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 6rem;
  }
`;

export const HomeSubheading = styled(Subheading)`
  @media only screen and (min-width: 768px) {
    text-align: center;
    margin-left: 0;
  }

  @media only screen and (min-width: 992px) {
    text-align: left;
  }
`;
export const HomeButtonContainer = styled.div`
  margin-top: 4em;

  @media only screen and (min-width: 992px) {
    font-size: 5em;
  }
`;

export const HomeButton = styled.button`
  color: #0b0d17;
  font-size: 2rem;
  border: none;
  width: 150px;
  height: 150px;
  border-radius: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    outline: 30px solid rgba(255, 255, 255, 0.2);
  }
`;
