import * as S from "./styled";

function Header(): React.ReactNode {
  return (
    <S.StyledHeader>
      <span>Home</span>
      <S.HeaderBar></S.HeaderBar>
    </S.StyledHeader>
  );
}

export default Header;
