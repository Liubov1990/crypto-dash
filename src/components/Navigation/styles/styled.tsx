import styled from "styled-components";
import { FlexColumnCenter, navBarSVG } from "../../../styles/Common";

export const NavBar = styled.div`
  ${FlexColumnCenter};
  position: sticky;
  top: 0;
  left: 0;
  gap: 30px;
  width: 100px;
  height: 100vh;
  border-right: 1px solid
    ${({ theme }) => theme.sharedColors.iconActiveBackground};
  padding: 30px 15px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const Logo = styled.div`
  svg {
    width: 42px;
    height: 46px;
  }
`;

export const Logout = styled.button`
  margin-top: auto;
  background: transparent;
  border: none;

  svg {
    ${navBarSVG};
  }
`;
