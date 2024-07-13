import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navigation from "../Navigation";

function Layout(): React.ReactNode {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
