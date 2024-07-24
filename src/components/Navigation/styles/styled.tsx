import styled from "styled-components";
import { FlexColumnCenter, navBarSVG } from "../../../styles/Common";
import { Btn } from "../../Button/styled";
import { device } from "../../../styles/BreakPoints";

export const NavBar = styled.div`
  ${FlexColumnCenter};
  position: sticky;
  top: 0;
  left: 0;
  gap: 30px;
  width: 100px;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.color.iconActiveBackground};
  padding: 30px 15px;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${device.lg} {
    width: 80px;
    padding: 25px 10px 20px;
  }

  @media ${device.sm} {
    width: 60px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export const Logo = styled.div`
  svg {
    width: 42px;
    height: 46px;

    @media ${device.lg} {
      width: 37px;
      height: 41px;
    }

    @media ${device.sm} {
      width: 32px;
      height: 36px;
    }
  }
`;

export const ActionBtnsGroup = styled.div`
  margin-top: auto;
`;

export const LogoutBtn = styled(Btn)`
  text-align: center;
  background: transparent;
  border: none;
  width: auto;
  margin-top: 40px;

  @media ${device.lg} {
    margin-top: 30px;
  }

  @media ${device.sm} {
    margin-top: 20px;
  }

  svg {
    ${navBarSVG};
  }
`;

export const ResetBtn = styled(LogoutBtn)`
  svg {
    width: 25px;
  }
`;
