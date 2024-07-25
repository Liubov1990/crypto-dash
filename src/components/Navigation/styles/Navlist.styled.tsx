import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  FlexCenter,
  FlexColumnCenter,
  navBarSVG,
} from "../../../styles/Common";
import { device } from "../../../styles/BreakPoints";

export const Nav = styled.nav`
  ${FlexColumnCenter};
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  transition: background 0.2s ease-in;

  &.active,
  &:hover {
    ${FlexCenter};
    background: ${({ theme }) => theme.color.iconActiveBackground};

    svg {
      fill: ${({ theme }) => theme.color.navBarSvgActive};
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

    @media ${device.lg} {
      width: 51px;
      height: 48px;
    }

    @media ${device.sm} {
      width: 41px;
      height: 38px;
    }
  }
`;
