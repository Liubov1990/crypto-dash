import styled from "styled-components";
import {
  ChartContainer,
  ChartOptionsBar,
  FlexRowBetween,
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
`;

export const ChartButton = styled(Btn)`
  width: 38px;
  height: 37px;
  padding: 0;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background: ${({ theme }) => theme.sharedColors.sortBackground};
  color: ${({ theme }) => theme.sharedColors.textSecondary};

  &.active {
    color: ${({ theme }) => theme.sharedColors.btnIcon};
  }
`;
