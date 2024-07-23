import { Link, useNavigate } from "react-router-dom";
import { app } from "../../services/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import NavList from "./NavList";
import * as S from "./styles/styled";
import { resetConfig } from "../../redux/slices/configSlice";

function Navigation(): React.ReactNode {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  const signOutUser = async (): Promise<void> => {
    try {
      await signOut(auth);
      dispatch(logout());
      dispatch(resetConfig());
      navigate("/");
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

      <S.ActionBtnsGroup>
        <S.ResetBtn>
          <svg>
            <use xlinkHref="svg/sprite.svg#reset" />
          </svg>
        </S.ResetBtn>
        {user && (
          <S.LogoutBtn onClick={signOutUser}>
            <svg>
              <use xlinkHref="svg/sprite.svg#log-out" />
            </svg>
          </S.LogoutBtn>
        )}
      </S.ActionBtnsGroup>
    </S.NavBar>
  );
}

export default Navigation;
