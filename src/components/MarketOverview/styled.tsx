import styled from "styled-components";
import {
  ChartContainer,
  FlexRowEnd,
  ChartOptionsBar,
  Select,
  Option,
} from "../../styles/Common";

export const MarketOverviewContainer = styled.div`
  ${ChartContainer};
`;

export const MarketOptionsBar = styled.div`
  ${FlexRowEnd};
  ${ChartOptionsBar};
  padding-bottom: 18px;
`;

export const MarketSelect = styled.select`
  ${Select};
`;

export const MarketOption = styled.option`
  ${Option};
`;
