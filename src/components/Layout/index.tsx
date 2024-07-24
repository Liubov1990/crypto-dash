import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch } from "../../hooks/use-store";
import { login } from "../../redux/slices/authSlice";
import Loader from "../Loader";
import { getUserConfig } from "../../services/firebase/db";
import {
  setCurrenciesList,
  setExchangeCurrency,
  setPersistentDocbox,
  setSerializedDockbox,
  setTheme,
} from "../../redux/slices/configSlice";

function Layout(): React.ReactNode {
  const auth = getAuth();
  const [isUserLoading, setisUserLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setisUserLoading(true);
    onAuthStateChanged(auth, async (user) => {
      if (user && user.email) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL || null,
            displayName: user.displayName,
          })
        );

        const config = await getUserConfig(user);

        if (config) {
          const { currenciesList, exchangeCurrency, theme, serializedDockbox } =
            config;
          dispatch(setCurrenciesList(currenciesList));
          dispatch(setExchangeCurrency(exchangeCurrency));
          dispatch(setTheme(theme));

          if (serializedDockbox) {
            dispatch(setSerializedDockbox(serializedDockbox));
            dispatch(setPersistentDocbox(true));
          }
        }
      }

      setisUserLoading(false);
    });
  }, []);

  return (
    <>
      {isUserLoading && <Loader />}
      {!isUserLoading && (
        <S.Container>
          <Navigation />
          <S.InnerContainer>
            <Header />
            <S.Main>
              <Outlet />
            </S.Main>
          </S.InnerContainer>
        </S.Container>
      )}
    </>
  );
}

export default Layout;
