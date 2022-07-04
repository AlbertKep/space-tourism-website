import styled from "styled-components";

export const Subheading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  color: #d0d6f9;
  padding-top: 1.5em;

  @media only screen and (min-width: 768px) {
    font-size: 1.75rem;
    text-align: left;
    margin: 1.2em 0 0 2em;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 0.5em;
    letter-spacing: 4px;
  } ;
`;
