import { Link } from "react-router-dom";
import * as S from "./styles";

function Navigation(): React.ReactNode {
  return (
    <S.NavBar>
      <S.Logo>
        <Link to="/">
          <svg>
            <use xlinkHref="svg/sprite.svg#logo" />
          </svg>
        </Link>
      </S.Logo>
      <S.Nav>
        <S.StyledNavLink to="/">
          <span>
            <svg>
              <use xlinkHref="svg/sprite.svg#home" />
            </svg>
          </span>
        </S.StyledNavLink>
      </S.Nav>
    </S.NavBar>
  );
}

export default Navigation;
