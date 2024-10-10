import React from "react";
import CustomInput from "../../CustomInput";

export default function ConfirmPasswordInput({
  confirmPassword,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  handleConfirmPasswordChange,
}) {
  return (
    <CustomInput
      label="Confirm Password"
      type={showPassword ? "text" : "password"}
      value={confirmPassword}
      onChange={handleConfirmPasswordChange}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
    />
  );
}