import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { FlexCenter, FlexColumnCenter } from "../../styles/Common";

const SVG = css`
  width: 21px;
  height: 23px;
  fill: ${({ theme }) => theme.sharedColors.icon};
  &:hover {
    fill: ${({ theme }) => theme.sharedColors.iconActive};
  }
`;

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
    ${SVG};
  }

  span {
    ${FlexCenter};
    width: 61px;
    height: 58px;
    text-align: center;
  }
`;

export const Logout = styled.button`
  margin-top: auto;
  background: transparent;
  border: none;

  svg {
    ${SVG};
  }
`;
