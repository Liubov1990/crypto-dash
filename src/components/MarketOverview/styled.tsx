import styled from "styled-components";
import {
  ChartContainer,
  FlexRowEnd,
  ChartOptionsBar,
} from "../../styles/Common";

export const MarketOverviewContainer = styled.div`
  ${ChartContainer};
`;

export const MarketOptionsBar = styled.div`
  ${FlexRowEnd};
  ${ChartOptionsBar};
  padding-bottom: 18px;
`;
