import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FlexCenter,
  FlexColumnCenter,
  navBarSVG,
} from "../../../styles/Common";

export const Nav = styled.nav`
  ${FlexColumnCenter};
  gap: 30px;
  width: 100px;
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
    ${navBarSVG};
  }

  span {
    ${FlexCenter};
    width: 61px;
    height: 58px;
    text-align: center;
  }
`;
