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
    font-family: ${({ theme }) => theme.fonts.interBold};
    font-size: ${({ theme }) => theme.fontSize.medium};
    color: ${({ theme }) => theme.color.textMain};
    background-color: ${({ theme }) => theme.color.mainBackground};
  }  

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    display: inline-block;
  }

  button {
    cursor: pointer
  }
`;

export default GlobalStyles;
