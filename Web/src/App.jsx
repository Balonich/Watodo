import TodosLayoutContainer from "./pages/Todos/TodosLayout/TodosLayoutContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/Home/HomeLayout/HomeLayoutView";
import ErrorLayoutContainer from "./pages/Error/ErrorLayout/ErrorLayoutContainer";

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
    </>
  )
);

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
