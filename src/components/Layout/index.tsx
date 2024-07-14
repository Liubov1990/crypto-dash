import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";
import * as S from "./styles";

function Layout(): React.ReactNode {
  return (
    <S.Container>
      <Navigation />
      <S.InnerContainer>
        <Header />
        <S.Main>
          <Outlet />
        </S.Main>
      </S.InnerContainer>
    </S.Container>
  );
}

export default Layout;
