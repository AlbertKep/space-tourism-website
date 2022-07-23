import styled from "styled-components";
import { Subheading } from "../../styles/Subheading.styled";

export const DestinationContainer = styled.section`
  margin: 0 auto;
  padding-top: 3em;
  text-align: center;

  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
    & > * {
      flex-basis: 100%;
    }
    justify-content: center;
  }
`;

export const PlanetContainer = styled.div`
  margin-top: 3em;

  span {
    padding-right: 0.5em;
    color: #707070;
  }

  @media only screen and (min-width: 992px) {
    margin-top: 0;
  }
`;

export const DestinationSubheading = styled(Subheading)`
  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
    margin: 2em 0 0 2em;
  }

  @media only screen and (min-width: 992px) {
    font-size: 1.5rem;
    margin-left: 2em;
    margin-bottom: 3em;
    letter-spacing: 4px;
  }
`;

export const PlanetImageContainer = styled.div`
  margin: 1.25em 0;
  img {
    width: 40%;

    @media only screen and (min-width: 480px) {
      width: 25%;
    }

    @media only screen and (min-width: 992px) {
      width: 50%;
    }
  }
`;

export const PlanetInfo = styled.div`
  padding: 0 2em;

  @media only screen and (min-width: 768px) {
    padding: 0 6em;
  }

  @media only screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
  }
`;

export const PlanetsList = styled.ul`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const PlanetsItem = styled.li`
  list-style-type: none;
  border-bottom: ${({ active }) => active};
  padding: 0.3em;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #707070;
  }
`;

export const PlanetName = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 5px;

  @media only screen and (min-width: 768px) {
    margin: 0.3em 0;
  }

  @media only screen and (min-width: 992px) {
    font-size: 4.5rem;
  }
`;

export const PlanetDetails = styled.div`
  border-top: 1px solid #707070;
  margin-top: 0.75em;

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1.5em;
  }

  @media only screen and (min-width: 992px) {
    justify-content: flex-start;
  }
`;

export const DetailsWrapper = styled.div`
  text-transform: uppercase;
  padding-top: 1em;

  span {
    display: block;
    padding-top: 0.3em;

    &:first-child {
      color: #707070;
    }

    &:nth-child(2) {
      font-size: 1.2rem;
    }
  }

  @media only screen and (min-width: 992px) {
    margin-right: 2.5em;
  }
`;
