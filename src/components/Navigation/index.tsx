import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../services/firebase/firebaseConfig";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import NavList from "./NavList";
import {
  resetConfig,
  setSerializedDockbox,
} from "../../redux/slices/configSlice";
import * as S from "./styles/styled";

function Navigation(): ReactNode {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const auth = getAuth(app);

  const signOutUser = async (): Promise<void> => {
    const shouldLogout = confirm("Logout confirmation");

    if (shouldLogout) {
      try {
        await signOut(auth);
        dispatch(logout());
        dispatch(resetConfig());
        navigate("/");
      } catch (error) {
        console.log("signOut fail");
      }
    }
  };

  return (
    <S.NavBar>
      <S.Logo>
        <Link to="/" aria-label="Return to home page">
          <svg>
            <use xlinkHref="svg/sprite.svg#logo" />
          </svg>
        </Link>
      </S.Logo>
      <NavList />
      <S.ActionBtnsGroup>
        <S.ResetBtn
          onClick={() => dispatch(setSerializedDockbox(null))}
          aria-label="Reset layout"
        >
          <svg>
            <use xlinkHref="svg/sprite.svg#reset" />
          </svg>
        </S.ResetBtn>
        {user && (
          <S.LogoutBtn onClick={signOutUser} aria-label="Log out">
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
