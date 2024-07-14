import styled from "styled-components";

export const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  font-family: ${({ theme }) => theme.fonts.interSemiBold};
  text-align: center;
  color: inherit;
  background: rgba(172, 106, 236, 1);
  background: linear-gradient(
    0deg,
    rgba(172, 106, 236, 1) 0%,
    rgba(187, 127, 245, 1) 100%
  );
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: none;

  @property --color1 {
    syntax: "<color>";
    initial-value: rgba(172, 106, 236, 1);
    inherits: false;
  }

  @property --color2 {
    syntax: "<color>";
    initial-value: rgba(187, 127, 245, 1);
    inherits: false;
  }

  background: linear-gradient(var(--color1), var(--color2));
  transition: --color1 0.5s, --color2 0.5s;

  &:hover {
    --color1: rgba(172, 106, 236, 0.5);
    --color2: rgba(187, 127, 245, 0.5);
  }
`;
