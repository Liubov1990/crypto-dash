import { useNavigate } from "react-router-dom";
import Button from "../Button";
import * as S from "./styled";

function Header(): React.ReactNode {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/auth");
  };

  return (
    <S.StyledHeader>
      <span>Home</span>
      <S.HeaderBar>
        <Button onClick={clickHandler} type="button">
          <span>Sign in</span>
        </Button>
      </S.HeaderBar>
    </S.StyledHeader>
  );
}

export default Header;
