import { useContext } from "react";
import UsernameInput from "./UsernameInputView";
import { AuthContext } from "../AuthContext";

export default function UsernameInputContainer() {
  const { username, handleUsernameChange } = useContext(AuthContext);

  return <UsernameInput Username={username} handleUsernameChange={handleUsernameChange} />;
}
