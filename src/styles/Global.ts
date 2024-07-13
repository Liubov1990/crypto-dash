import { createGlobalStyle } from "styled-components";
import fontsCss from "./fonts.module.css";

const GlobalStyles = createGlobalStyle`
 ${fontsCss} 

  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: "Inter-Bold";
  }

  button {
    border: none;
    font-family: inherit;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default GlobalStyles;
