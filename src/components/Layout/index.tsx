import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/use-store";
import { login } from "../../redux/slices/authSlice";
import Loader from "../Loader";
// import { GECKO_MARKETS_URL } from "../../constants/api";
// import { fetchGeneralData } from "../../redux/slices/cryptoDataSlice";

function Layout(): React.ReactNode {
  const auth = getAuth();
  const [isUserLoading, setisUserLoading] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  // const { currenciesList, exchangeCurrency } = useAppSelector(
  //   (state) => state.config
  // );
  // const isLoading = useAppSelector((state) => state.cryptoData.isLoading);
  // const isAppLoading = isUserLoading || isLoading;

  useEffect(() => {
    setisUserLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user && user.email)
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            photoURL: user.photoURL || null,
            displayName: user.displayName,
          })
        );
      setisUserLoading(false);
    });

    // dispatch(
    //   fetchGeneralData({
    // url: GECKO_MARKETS_URL,
    //     currenciesList: currenciesList.map(({ id }) => id).join(","),
    //     exchangeCurrency: exchangeCurrency,
    //   })
    // );
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
