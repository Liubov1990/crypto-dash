import styled from "styled-components";
import {
  Card,
  ChartOptionsBar,
  FlexColumn,
  FlexRowBetween,
} from "../../../styles/Common";

export const CurrencyCard = styled(Card)`
  ${FlexColumn};
  position: relative;
  min-width: 240px;
  width: 100%;
  height: 155px;
  font-family: ${({ theme }) => theme.fonts.interSemiBold};
  background: #4a435c;
  border: none;
  padding: 30px 0 15px;
  margin: 30px 10px 10px;
`;

export const CoinWrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
`;

export const CoinBar = styled.div`
  ${ChartOptionsBar}
  ${FlexRowBetween}
  top: 30px;
  color: ${({ theme }) => theme.sharedColors.textSecondary};
  text-transform: uppercase;
`;

export const ArrowRightSVG = styled.svg`
  width: 13px;
  height: 17px;
  fill: ${({ theme }) => theme.sharedColors.btnIcon};
  vertical-align: top;
  margin: 0 3px;
`;

export const CurrentPrice = styled.span`
  position: absolute;
  top: 53px;
  font-size: 1rem;
  color: ${({ theme }) => theme.sharedColors.btnIcon};
  margin-left: 20px;
`;

export const ArrowCircledSVG = styled.svg`
  width: 16px;
  height: 17px;

  &.up {
    --fill-color: #e72d04;
  }

  &.down {
    --fill-color: #00c287;
    transform: rotate(180deg);
  }
`;
