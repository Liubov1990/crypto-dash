import styled from "styled-components";
import { FlexCenter, FlexRowBetween } from "../../styles/Common";
import { device } from "../../styles/BreakPoints";

export const StyledHeader = styled.header`
  ${FlexRowBetween};
  width: 100%;
  max-height: 100px;
  padding: 30px;

  @media ${device.lg} {
    max-height: 80px;
    padding: 20px;
  }
  @media ${device.sm} {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HeaderBar = styled.div`
  ${FlexRowBetween}
  gap: 12px;
`;

export const UserProfileImg = styled.div`
  color: ${({ theme }) => theme.sharedColors.btnIcon};
  padding: 5px;

  & > div {
    ${FlexCenter};
    width: 47px;
    height: 47px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background: ${({ theme }) => theme.color.userProfile};
    cursor: pointer;
  }
`;
