import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/use-store";
import Button from "../Button";
import * as S from "./styled";

function Header(): React.ReactNode {
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.auth);

  const userInitials =
    user?.displayName
      ?.split(/\s+/)
      .map((word) => word.substring(0, 1).toUpperCase())
      .join("") || user?.email?.substring(0, 1).toUpperCase();

  const handleAuth = () => {
    navigate("/auth");
  };

  return (
    <S.StyledHeader>
      <span>Home</span>
      <S.HeaderBar>
        {!user ? (
          <Button onClick={handleAuth} type="button">
            <span>Sign in</span>
          </Button>
        ) : (
          <S.UserProfileImg>
            <div>{userInitials}</div>
          </S.UserProfileImg>
        )}
      </S.HeaderBar>
    </S.StyledHeader>
  );
}

export default Header;
