import styled from "styled-components";
import {
  ChartContainer,
  ChartOptionsBar,
  FlexRowBetween,
  Select,
  Option,
} from "../../styles/Common";
import { Btn } from "../Button/styled";

export const TradeHistoryContainer = styled.div`
  ${ChartContainer};
`;

export const TradeHistoryOptionsBar = styled.div`
  ${FlexRowBetween};
  ${ChartOptionsBar};
`;

export const ChartBtnGroup = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 5px;
`;

export const ChartButton = styled(Btn)`
  width: 38px;
  height: 37px;
  padding: 0;
  font-family: ${({ theme }) => theme.fonts.interBold};
  background: ${({ theme }) => theme.sharedColors.sortBackground};
  color: ${({ theme }) => theme.sharedColors.textSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};

  &.active {
    color: ${({ theme }) => theme.sharedColors.btnIcon};
  }
`;

export const TradeSelect = styled.select`
  ${Select};
`;

export const TradeOption = styled.option`
  ${Option};
`;
