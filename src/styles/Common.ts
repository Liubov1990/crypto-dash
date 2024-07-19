import styled, { css } from "styled-components";
import { Btn } from "../components/Button/styled";

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColumnCenter = css`
  ${FlexColumn};
  align-items: center;
`;

export const FlexCenter = css`
  ${FlexColumnCenter}
  justify-content: center;
`;

export const FlexRowBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RelativeContainer = css`
  ${FlexColumnCenter};
  position: relative;
  width: 100%;
`;

export const Transition = css`
  transition: color 0.3s ease-in-out;
`;

export const Input = styled.input`
  width: 100%;
  height: 47px;
  font-family: ${({ theme }) => theme.fonts.interRegular};
  color: ${({ theme }) => theme.sharedColors.searchText};
  background: ${({ theme }) => theme.sharedColors.searchBackground};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  outline: none;
  padding: 5px 10px;
  margin: 5px 0;
  caret-color: ${({ theme }) => theme.sharedColors.searchText};

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px
      ${({ theme }) => theme.sharedColors.searchBackground} inset !important;
    -webkit-text-fill-color: ${({ theme }) =>
      theme.sharedColors.searchText} !important;
    border: 1px solid ${({ theme }) => theme.sharedColors.searchBackground};
    transition: background-color 5000s ease-in-out 0s;
  }

  &::placeholder {
    color: ${({ theme }) => theme.sharedColors.border};
  }

  &:focus {
    box-shadow: inset 0px 0px 5px
      ${({ theme }) => theme.sharedColors.accentColor};
  }
`;

export const navBarSVG = css`
  width: 21px;
  height: 23px;
  fill: ${({ theme }) => theme.sharedColors.icon};
  &:hover {
    fill: ${({ theme }) => theme.sharedColors.iconActive};
  }
`;

export const BtnWithSVG = styled(Btn)`
  top: 30px;
  right: 30px;

  svg {
    width: 28px;
    height: 24px;
    vertical-align: middle;
    fill: ${({ theme }) => theme.sharedColors.btnIcon};
    transition: fill 0.3s ease-in-out;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.sharedColors.accentColor};
  }
`;

export const Card = styled.div.attrs<{
  $border?: string;
  $width?: string;
  $padding?: string;
}>((props) => ({
  $border:
    props.$border === "true" ? "1px solid rgba(255, 255, 255, 0.5)" : "none",
}))`
  background: ${({ theme }) => theme.color.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  width: ${(props) => props.$width};
  border: ${(props) => props.$border};
  padding: ${(props) => props.$padding};
`;
