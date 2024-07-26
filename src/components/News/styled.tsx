import styled from "styled-components";
import { FlexColumn, FlexRowBetween } from "../../styles/Common";
import { device } from "../../styles/BreakPoints";

export const NewsContainer = styled.div`
  ${FlexColumn}
  height: 100%;
  padding: 10px;
  overflow: auto;
`;

export const Article = styled.article`
  display: flex;
  gap: 20px;
  min-width: 500px;
  max-width: 900px;
  width: 100%;
  background: ${({ theme }) => theme.color.boxInnerBackground};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  padding: 20px;
  margin: 0 auto 30px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ImgContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  min-width: 180px;
  max-width: 210px;
  flex-basis: 30%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${device.sm} {
    min-width: 140px;
  }

  img {
    border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
    aspect-ratio: 10 / 9;
    transition: transform 0.3s linear;
  }
`;

export const TextBlock = styled.div`
  ${FlexColumn};
  flex-grow: 1;
`;

export const Title = styled.h3`
  font-size: clamp(14px, 2vw, 16px);
  line-height: 1.1;
  color: ${({ theme }) => theme.sharedColors.searchText};
  text-shadow: 1px 1px black;
  margin-bottom: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.sharedColors.accentLight};
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.interRegular};
  font-size: 12px;
  color: ${({ theme }) => theme.sharedColors.btnIcon};
  margin-bottom: 10px;
`;

export const Info = styled.div`
  ${FlexRowBetween};
  flex-wrap: wrap;
  font-size: 0.6875rem;
`;

export const Time = styled.p`
  ${FlexRowBetween};
  color: ${({ theme }) => theme.color.articleTime};
  margin-right: 15px;
  margin-top: 5px;
`;

export const Categories = styled.div`
  ${FlexRowBetween};
  gap: 7px;
  margin-top: 5px;

  span {
    display: inline-block;
    color: ${({ theme }) => theme.sharedColors.btnIcon};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    background: ${({ theme }) => theme.sharedColors.accentColor};
    padding: 5px 7px;
    margin: 2px;
  }
`;

export const Category = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.sharedColors.btnIcon};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: ${({ theme }) => theme.sharedColors.accentColor};
  padding: 5px 7px;
  margin: 2px;
`;
