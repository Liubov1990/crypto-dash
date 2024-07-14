import { createGlobalStyle, css } from "styled-components";
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
    color: ${({ theme }) => theme.color.textMain};
    background-color: ${({ theme }) => theme.color.mainBackground};
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
`;

export const FlexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyles;
