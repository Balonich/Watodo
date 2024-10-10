import { useRouteError } from "react-router-dom";
import ErrorLayout from "./ErrorLayoutView";

export default function ErrorLayoutContainer() {
  const error = useRouteError();
  console.error(error);
  return <ErrorLayout error={error} />;
}
