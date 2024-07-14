import Button from "../Button";
import * as S from "./styled";

function Header(): React.ReactNode {
  return (
    <S.StyledHeader>
      <span>Home</span>
      <S.HeaderBar>
        <Button>Sign in</Button>
      </S.HeaderBar>
    </S.StyledHeader>
  );
}

export default Header;
