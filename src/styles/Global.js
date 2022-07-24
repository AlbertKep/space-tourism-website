import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  color: #fff;
  font-family: 'Barlow Condensed', sans-serif;
}

/* html, body {
  width: 100%;
  overflow-x: hidden;
} */
`;

export const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;
