import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUserConfig } from "../../services/firebase/db";
import { useAppDispatch } from "../../hooks/use-store";
import { login } from "../../redux/slices/authSlice";
import {
  setCurrenciesList,
  setExchangeCurrency,
  setPersistentDocbox,
  setSerializedDockbox,
  setTheme,
} from "../../redux/slices/configSlice";
import Header from "../Header";
import Navigation from "../Navigation";
import Loader from "../Loader";
import * as S from "./styled";

function Layout(): React.ReactNode {
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const [isUserLoading, setisUserLoading] = useState<boolean>(true);

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
          if (currenciesList) dispatch(setCurrenciesList(currenciesList));
          if (exchangeCurrency) dispatch(setExchangeCurrency(exchangeCurrency));
          if (theme) dispatch(setTheme(theme));
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
