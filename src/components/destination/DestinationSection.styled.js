import styled from "styled-components";

export const DestinationContainer = styled.section`
  margin: 0 auto;
  padding-top: 3em;
  text-align: center;
`;

export const PlanetContainer = styled.div`
  margin-top: 3em;

  span {
    padding-right: 0.5em;
    color: #707070;
  }
`;

export const PlanetImageContainer = styled.div`
  margin: 1.25em 0;
  img {
    width: 40%;
  }
`;

export const PlanetInfo = styled.div`
  padding: 0 2em;
`;

export const PlanetsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const PlanetsItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid transparent;
  padding: 0.3em;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #fff;
  }
`;

export const PlanetName = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 5px;
`;

export const PlanetDetails = styled.div`
  border-top: 1px solid #707070;
  margin-top: 0.75em;
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
`;
