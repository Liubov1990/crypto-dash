import { Link } from "react-router-dom";
import { app } from "../../services/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import NavList from "./NavList";
import * as S from "./styles/styled";

function Navigation(): React.ReactNode {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  const signOutUser = async (): Promise<void> => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.log("signOut fail");
    }
  };

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
      {user && (
        <S.Logout onClick={signOutUser}>
          <svg>
            <use xlinkHref="svg/sprite.svg#log-out" />
          </svg>
        </S.Logout>
      )}
    </S.NavBar>
  );
}

export default Navigation;
