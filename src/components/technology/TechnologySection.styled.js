import styled from "styled-components";
import { InfoWrapper } from "../layout/Layout.styled";

export const TechnologyContainer = styled.section`
  margin: 0 auto;
  padding-top: 4.5em;

  /* @media only screen and (min-width: 992px) {
    display: flex;
  } */

  span {
    padding-right: 0.5em;
    color: #707070;
  }

  img {
    width: 100%;
    max-height: 250px;
    object-fit: cover;

    @media only screen and (min-width: 992px) {
      object-fit: contain;
      max-height: inherit;
    }
  }
`;
export const ControlContainer = styled.div`
  @media only screen and (min-width: 992px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 4em 1em;
    & > * {
      flex-basis: 100%;
    }
    justify-content: space-around;
  }
`;

export const TechnologyInfoWrapper = styled(InfoWrapper)`
  @media only screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 0.5fr);
    grid-template-rows: repeat(3, 0.5fr);
    align-items: baseline;
    grid-template-areas:
      "dots role role"
      "dots name name"
      "dots text text";

    & :nth-child(1) {
      grid-area: dots;
    }

    & :nth-child(2) {
      grid-area: role;
    }

    & :nth-child(3) {
      grid-area: name;
    }

    & :nth-child(4) {
      grid-area: text;
    }
  }
`;

export const Dots = styled.div`
  margin: 0.5em auto 0.75em;

  @media only screen and (min-width: 992px) {
    margin: 0;
  }
`;

export const Dot = styled.div`
  box-sizing: content-box;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  background-color: ${({ active }) => active.backgroundColor};
  border: 2px solid #4b4b54;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0.5em;
  color: ${({ active }) => active.color};
  margin: 0.5em;

  &:hover {
    border-color: #fff;
  }

  @media only screen and (min-width: 992px) {
    display: block;
    padding: 1em;
    margin-top: 1.75em;
  }
`;
