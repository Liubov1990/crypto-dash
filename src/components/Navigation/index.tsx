import { Link } from "react-router-dom";
import { Logo, Nav, NavBar, StyledNavLink } from "./styled";

function Navigation(): React.ReactNode {
  return (
    <NavBar>
      <Logo>
        <Link to="/">
          <svg>
            <use xlinkHref="svg/sprite.svg#logo" />
          </svg>
        </Link>
      </Logo>
      <Nav>
        <StyledNavLink to="/">
          <span>
            <svg>
              <use xlinkHref="svg/sprite.svg#home" />
            </svg>
          </span>
        </StyledNavLink>
      </Nav>
    </NavBar>
  );
}

export default Navigation;
