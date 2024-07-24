import styled from "styled-components";
import { Btn } from "../../components/Button/styled";
import { Select, Option } from "../../styles/Common";

export const SettingsCoontainer = styled.section`
  max-width: 450px;
  width: 100%;
  padding: 0 10px 10px;
`;

export const Fieldset = styled.fieldset`
  background: ${({ theme }) => theme.color.boxBackground};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 6px 15px 10px 10px;
  margin-bottom: 7px;
`;

export const Legend = styled.legend`
  font-size: 1rem;
  line-height: 1;
  color: ${({ theme }) => theme.sharedColors.accentLight};
`;

export const CheckboxGroup = styled.div`
  margin-bottom: 3px;
`;

export const CheckBoxLabel = styled.label`
  position: relative;
  font-family: ${({ theme }) => theme.fonts.interSemiBold};
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.sharedColors.textSecondary};
  cursor: pointer;

  &:before {
    content: "";
    position: relative;
    display: inline-block;
    background-color: transparent;
    background: ${({ theme }) => theme.sharedColors.sortBackground};
    border-radius: 4px;
    vertical-align: middle;
    padding: 10px;
    margin-right: 7px;
    cursor: pointer;
  }
`;

export const InputCheckbox = styled.input`
  padding: 0;
  height: initial;
  width: initial;
  margin-bottom: 0;
  display: none;
  cursor: pointer;

  &:checked + ${CheckBoxLabel}:after {
    content: "";
    display: block;
    position: absolute;
    top: 1px;
    left: 7px;
    width: 5px;
    height: 12px;
    border: solid ${({ theme }) => theme.sharedColors.accentColor};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  &:checked + ${CheckBoxLabel} {
    color: ${({ theme }) => theme.color.textMain};
  }
`;

export const SettingsBtn = styled(Btn)`
  margin-top: 10px;
`;

export const SettingsSelect = styled.select`
  ${Select};
`;

export const SettingsOption = styled.option`
  ${Option};
`;
