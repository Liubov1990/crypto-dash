import { Link } from "react-router-dom";
import * as S from "./styled";
import signOutUser from "../../services/firebase/signOutUser";

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
      <S.Logout onClick={signOutUser}>
        <svg>
          <use xlinkHref="svg/sprite.svg#log-out" />
        </svg>
      </S.Logout>
    </S.NavBar>
  );
}

export default Navigation;
