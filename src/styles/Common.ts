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
  ${FlexColumnCenter};
  justify-content: center;
`;

export const FlexRowCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexRowBetween = css`
  ${FlexRowCenter};
  justify-content: space-between;
`;

export const FlexRowEnd = css`
  display: flex;
  justify-content: flex-end;
`;

export const RelativeContainer = css`
  ${FlexColumnCenter};
  position: relative;
  width: 100%;
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
    color: ${({ theme }) => theme.color.border};
  }

  &:focus {
    box-shadow: inset 0px 0px 5px
      ${({ theme }) => theme.sharedColors.accentColor};
  }
`;

export const navBarSVG = css`
  width: 21px;
  height: 23px;
  fill: ${({ theme }) => theme.color.navBarSvg};

  &:hover {
    fill: ${({ theme }) => theme.color.navBarSvgActive};
  }
`;

export const BtnWithSVG = styled(Btn)`
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

export const Select = css`
  position: relative;
  width: auto;
  padding: 10px 13px;
  font-family: ${({ theme }) => theme.fonts.interBold};
  color: ${({ theme }) => theme.sharedColors.btnIcon};
  background: ${({ theme }) => theme.sharedColors.sortBackground};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  border: none;
  border-right: 10px solid ${({ theme }) => theme.sharedColors.selectBorder};
  outline: none;

  &::-ms-expand {
    display: none;
  }
`;

export const Option = css`
  background-color: #484545;

  &:not(:checked) {
    font-family: ${({ theme }) => theme.fonts.interBold}, sans-serif;
    color: ${({ theme }) => theme.sharedColors.textSecondary};
    font-weight: 700;
  }
`;

export const ChartContainer = css`
  height: 100%;
  padding-left: 10px;
`;

export const ChartOptionsBar = css`
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 15px 0 21px;
  z-index: 100;
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
