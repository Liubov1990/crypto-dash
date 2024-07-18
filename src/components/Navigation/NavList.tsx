import * as S from "./styles/Navlist.styled";

function NavList(): React.ReactNode {
  return (
    <S.Nav>
      <S.StyledNavLink to="/">
        <span>
          <svg>
            <use xlinkHref="svg/sprite.svg#home" />
          </svg>
        </span>
      </S.StyledNavLink>
    </S.Nav>
  );
}

export default NavList;
