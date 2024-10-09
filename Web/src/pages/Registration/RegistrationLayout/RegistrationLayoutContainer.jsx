import withAuthContext from "../../../shared/components/Auth/withAuthContext";
import RegistrationLayout from "./RegistrationLayoutView";

const RegistrationLayoutContainer = withAuthContext(RegistrationLayout);

export default RegistrationLayoutContainer;
