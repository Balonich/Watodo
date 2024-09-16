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
import LoginLayoutView from "./pages/Login/LoginLayoutView";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./themes.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {" "}
      <Route
        path="/home"
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
        element={<LoginLayoutView />}
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
        <CssBaseline/>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
