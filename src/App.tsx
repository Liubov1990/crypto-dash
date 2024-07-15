import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
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
    <Provider store={store}>
      <ThemeContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
