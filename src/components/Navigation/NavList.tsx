import { ReactNode } from "react";
import { useAppSelector } from "../../hooks/use-store";
import * as S from "./styles/Navlist.styled";

function NavList(): ReactNode {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <S.Nav>
      <S.StyledNavLink to="/" aria-label="Home page">
        <span>
          <svg>
            <use xlinkHref="svg/sprite.svg#home" />
          </svg>
        </span>
      </S.StyledNavLink>
      {user && (
        <S.StyledNavLink to="/settings" aria-label="Settings">
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
