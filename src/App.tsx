import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/Global";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound ";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import { useAppSelector } from "./hooks/use-store";
import theme from "./styles/Theme";
import { ThemeProvider } from "styled-components";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/settings", element: <Settings /> },
      ],
      errorElement: <NotFound />,
    },
    {
      path: "/auth",
      element: <Auth />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  const currentTheme = useAppSelector((state) => state.config.theme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
