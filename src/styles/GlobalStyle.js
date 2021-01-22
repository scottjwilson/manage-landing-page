import { createGlobalStyle } from "styled-components"
import { theme } from "./ColorStyles"
import "@fontsource/be-vietnam"
export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
 
}


html {font-size: 112.5%;} /*18px*/
 
body {
  background: white;
  font-family: 'Be Vietnam', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5, button {
  margin: 3rem 0 1.38rem;
  font-family: 'Be Vietnam', sans-serif;
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {font-size: 2.441rem;}

h3 {font-size: 1.953rem;}

h4 {font-size: 1.563rem;}

h5 {font-size: 1.25rem;}

small, .text_small {font-size: 0.8rem;}
`
