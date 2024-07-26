import styled from "styled-components";
import { FlexRowBetween, FlexRowCenter } from "../../styles/Common";
import { device } from "../../styles/BreakPoints";

export const AngleSVG = styled.svg`
  fill: ${({ theme }) => theme.sharedColors.statusDown};
  width: 12px;
  height: 7px;
  @media ${device.sm} {
    margin-right: 3px;
  }

  &.up {
    fill: ${({ theme }) => theme.sharedColors.stausUp};
    transform: rotate(180deg);
  }
`;

export const TrandsContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 1fr;
  grid-auto-rows: 48px;
  height: 100%;
  font-family: ${({ theme }) => theme.fonts.interRegular};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.textMain};
  overflow: auto;

  @media ${device.sm} {
    grid-auto-rows: 35px;
  }

  & > div {
    ${FlexRowCenter};
    line-height: 0.714;
    padding: 15px 24px;

    @media ${device.sm} {
      padding: 0 0 0 10px;
    }
  }
`;

export const GridHeading = styled.h3`
  position: sticky;
  top: 0;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.color.trendHeading};
  background: ${({ theme }) => theme.color.boxBackground};
  white-space: nowrap;
  padding: 20px 24px;
  z-index: 1;

  @media ${device.sm} {
    padding: 0 0 0 10px;
  }
`;

export const GridConcat = styled.div`
  grid-column: 1/-1;
  text-align: center;
`;

export const Currency = styled.div`
  text-transform: uppercase;

  span {
    color: ${({ theme }) => theme.sharedColors.trendCurrencyName};
    text-transform: capitalize;
    margin-left: 5px;
  }
`;

export const Price = styled.div`
  color: ${({ theme }) => theme.sharedColors.price};
`;

export const Change = styled.div`
  ${FlexRowBetween};
  max-width: 130px;
  width: 100%;

  span {
    margin-left: 15px;

    @media ${device.sm} {
      margin-left: 5px;
    }
  }
`;
