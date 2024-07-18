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
    scrollbar-gutter: stable;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
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

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  /* scroll bar*/

  * {
    scrollbar-width: auto;
  }

  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.mainBackground};
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  }
`;

export default GlobalStyles;
