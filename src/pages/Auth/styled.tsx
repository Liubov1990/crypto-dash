import styled from "styled-components";
import { Card, FlexCenter, Transition } from "../../styles/Common";
import { Btn } from "../../components/Button/styled";

export const AuthContainer = styled("main")`
  ${FlexCenter}
  position: relative;
  height: 100vh;
  padding: 10px;
`;

export const AbsButton = styled(Btn)`
  position: absolute;
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

export const AuthCard = styled(Card)`
  min-width: 300px;
  max-width: 375px;
  width: 100%;
`;

export const BtnSVG = styled("svg")`
  width: 30px;
  height: 21px;
  vertical-align: middle;
`;

export const ValidationError = styled("p")`
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.sharedColors.statusDown};
  margin: 0;
`;

export const InputContainer = styled("div")`
  margin-bottom: 10px;
`;

export const Divider = styled("div")`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  text-align: center;
  margin: 15px 0 10px;

  &:last-child {
    margin-bottom: 0;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.sharedColors.searchText};
      ${Transition};
    }
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid ${({ theme }) => theme.sharedColors.border};
  }

  span {
    font-family: ${({ theme }) => theme.fonts.interRegular};
    margin: 0 10px;
  }
`;

export const SignOption = styled("div")`
  text-align: center;
  margin: 15px 0;
`;

export const AccentLink = styled("span")`
  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.sharedColors.accentColor};
    cursor: pointer;
    ${Transition};
  }
`;
