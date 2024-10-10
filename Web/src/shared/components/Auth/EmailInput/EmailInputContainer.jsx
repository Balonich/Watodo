import { useContext } from "react";
import EmailInput from "./EmailInputView";
import { AuthContext } from "../AuthContext";

export default function EmailInputContainer() {
  const { email, handleEmailChange } = useContext(AuthContext);

  return <EmailInput email={email} handleEmailChange={handleEmailChange} />;
}
