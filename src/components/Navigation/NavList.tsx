import { useAppSelector } from "../../hooks/use-store";
import * as S from "./styles/Navlist.styled";

function NavList(): React.ReactNode {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <S.Nav>
      <S.StyledNavLink to="/">
        <span>
          <svg>
            <use xlinkHref="svg/sprite.svg#home" />
          </svg>
        </span>
      </S.StyledNavLink>
      {user && (
        <S.StyledNavLink to="/settings">
          <span>
            <svg>
              <use xlinkHref="svg/sprite.svg#settings" />
            </svg>
          </span>
        </S.StyledNavLink>
      )}
    </S.Nav>
  );
}

export default NavList;
