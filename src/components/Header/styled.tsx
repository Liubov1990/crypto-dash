import styled from "styled-components";
import { FlexCenter, FlexRowBetween } from "../../styles/Common";

export const StyledHeader = styled.header`
  ${FlexRowBetween}
  padding: 30px;
  width: 100%;
  max-height: 100px;
`;

export const HeaderBar = styled.div`
  ${FlexRowBetween}
  gap: 12px;
`;

export const UserProfileImg = styled.div`
  padding: 5px;

  & > div {
    ${FlexCenter};

    width: 47px;
    height: 47px;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    background: ${({ theme }) => theme.sharedColors.userProfile};
    cursor: pointer;
  }
`;
