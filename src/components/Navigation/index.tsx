import { Link } from "react-router-dom";
import signOutUser from "../../services/firebase/signOutUser";
import NavList from "./NavList";
import * as S from "./styles/styled";

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
      <NavList />
      <S.Logout onClick={signOutUser}>
        <svg>
          <use xlinkHref="svg/sprite.svg#log-out" />
        </svg>
      </S.Logout>
    </S.NavBar>
  );
}

export default Navigation;
