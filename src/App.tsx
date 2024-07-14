import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeContextProvider from "./context/ThemeContext";
import GlobalStyles from "./styles/Global";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound ";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
      errorElement: <NotFound />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
);

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}

export default App;
