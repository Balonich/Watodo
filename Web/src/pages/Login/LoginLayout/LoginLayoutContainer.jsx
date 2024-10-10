import withAuthContext from "../../../shared/components/Auth/withAuthContext";
import LoginLayout from "./LoginLayoutView";

const LoginLayoutContainer = withAuthContext(LoginLayout);

export default LoginLayoutContainer;
