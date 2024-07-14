import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FlexCenter, FlexColumnCenter } from "../../styles/Global";

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

export const Nav = styled.nav`
  ${FlexColumnCenter};
  gap: 30px;
  width: 100px;
`;

export const Logo = styled.div`
  svg {
    display: inline-block;
    width: 42px;
    height: 46px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background ${({ theme }) => theme.transitionTime.quick};

  &.active,
  &:hover {
    ${FlexCenter};
    background: ${({ theme }) => theme.sharedColors.iconActiveBackground};
    svg {
      fill: ${({ theme }) => theme.sharedColors.iconActive};
    }
  }

  svg {
    display: inline-block;
    width: 21px;
    height: 23px;
    fill: ${({ theme }) => theme.sharedColors.icon};
  }

  span {
    ${FlexCenter};
    width: 61px;
    height: 58px;
    text-align: center;
  }
`;
