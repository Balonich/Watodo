import TodosLayoutContainer from "./pages/Todos/TodosLayout/TodosLayoutContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./pages/Home/HomeLayout/HomeLayoutView";
import ErrorLayoutContainer from "./pages/Error/ErrorLayout/ErrorLayoutContainer";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./themes.js";
import LoginLayoutContainer from "./pages/Login/LoginLayout/LoginLayoutContainer.jsx";
import RegistrationLayoutContainer from "./pages/Registration/RegistrationLayout/RegistrationLayoutContainer.jsx";
import { ErrorProvider } from "./shared/components/Error/ErrorContext.jsx";
import Error from "./shared/components/Error/ErrorView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route
        path="/"
        element={<HomeLayout />}
        errorElement={<ErrorLayoutContainer />}
      />
      <Route
        path="/todos"
        element={<TodosLayoutContainer />}
        errorElement={<ErrorLayoutContainer />}
      />
      <Route
        path="/login"
        element={<LoginLayoutContainer />}
        errorElement={<ErrorLayoutContainer />}
      />
      <Route
        path="/signup"
        element={<RegistrationLayoutContainer />}
        errorElement={<ErrorLayoutContainer />}
      />
    </>
  )
);

const queryClient = new QueryClient();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ErrorProvider>
          <CssBaseline />
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
          <Error />
        </ErrorProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
