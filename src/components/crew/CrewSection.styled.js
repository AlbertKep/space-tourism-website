import styled from "styled-components";
import { InfoWrapper } from "../layout/Layout.styled";

export const CrewContainer = styled.section`
  margin: 0 auto;
  padding-top: 4.5em;

  span {
    padding-right: 0.5em;
    color: #707070;
  }
`;

export const ControlContainer = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    & :nth-child(1) {
      order: 2;
    }

    & :nth-child(2) {
      order: 1;
    }
  }

  @media only screen and (min-width: 992px) {
    flex-direction: row;
    & > * {
      flex-basis: 100%;
    }
    justify-content: space-around;
  }
`;

export const CrewInfoWrapper = styled(InfoWrapper)`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    & :nth-child(1) {
      order: 4;
    }

    & :nth-child(2) {
      order: 1;
    }

    & :nth-child(3) {
      order: 2;
    }

    & :nth-child(4) {
      order: 2;
    }
  }
`;

export const Dots = styled.div`
  text-align: center;

  @media only screen and (min-width: 992px) {
    text-align: left;
    margin-top: 4.5em;
  }
`;

export const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ active }) => active};
  margin: 0.5em;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? active : "#85868b")};
    transform: scale(1.1);
  }
`;
