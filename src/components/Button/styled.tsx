import styled from "styled-components";

export const Btn = styled.button.attrs<{ $width?: string }>((props) => ({
  $width: props.$width === "full" ? "100%" : "120px",
}))`
  width: ${(props) => props.$width};
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.interSemiBold};
  text-align: center;
  color: inherit;
  text-shadow: 1px 1px black;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: none;
  padding: 0 20px;
  background-color: #ac6aec;
  transition: background-color 0.5s ease-in;

  &:hover {
    background-color: #7517f8;
  }

  /* experimental! causes validation errors! */

  /* @property --color1 {
    syntax: "<color>";
    initial-value: rgba(172, 106, 236, 1);
    inherits: false;
  }

  @property --color2 {
    syntax: "<color>";
    initial-value: rgba(187, 127, 245, 1);
    inherits: false;
  }

  background-color: #ac6aec;
  background: linear-gradient(var(--color1), var(--color2));
  transition: --color1 0.5s, --color2 0.5s;

  &:hover {
    --color1: rgba(172, 106, 236, 0.5);
    --color2: rgba(187, 127, 245, 0.5);
  }

  @-moz-document url-prefix() {
    & {
      background-color: #ac6aec;
      transition: background-color 0.5s ease-in;
    }

    &:hover {
      background-color: #7517f8;
    }
  } */
`;
