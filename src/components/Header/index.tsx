import loginWithGoogle from "../../services/firebase/loginWithGoogle";
import Button from "../Button";
import * as S from "./styled";

function Header(): React.ReactNode {
  return (
    <S.StyledHeader>
      <span>Home</span>
      <S.HeaderBar>
        <Button onClick={loginWithGoogle} type="button">
          <span>Sign in with</span>
          <svg>
            <use xlinkHref="svg/sprite.svg#google" />
          </svg>
        </Button>
      </S.HeaderBar>
    </S.StyledHeader>
  );
}

export default Header;
