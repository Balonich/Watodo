import { useContext } from "react";
import PasswordInput from "./PasswordInputView";
import { AuthContext } from "../AuthContext";

export default function PasswordInputContainer() {
  const {
    password,
    showPassword,
    handleClickShowPassword,
    handleMouseDownPassword,
    handlePasswordChange,
  } = useContext(AuthContext);

  return (
    <PasswordInput
      password={password}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      handlePasswordChange={handlePasswordChange}
    />
  );
}
