import { useContext } from "react";
import ConfirmPasswordInput from "./ConfirmPasswordInputView";
import { AuthContext } from "../AuthContext";

export default function ConfirmPasswordInputContainer() {
  const {
    confirmPassword,
    showPassword, // TODO: Fix shared state, create separate state for confirmPassword
    handleClickShowPassword,
    handleMouseDownPassword,
    handleConfirmPasswordChange,
  } = useContext(AuthContext);

  return (
    <ConfirmPasswordInput
      confirmPassword={confirmPassword}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      handleConfirmPasswordChange={handleConfirmPasswordChange}
    />
  );
}