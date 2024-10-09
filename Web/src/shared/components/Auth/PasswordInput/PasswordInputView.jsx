import React from "react";
import CustomInput from "../../CustomInput";

export default function PasswordInput({
  password,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  handlePasswordChange,
}) {
  return (
    <CustomInput
      label="Password"
      type={showPassword ? "text" : "password"}
      value={password}
      onChange={handlePasswordChange}
      showPassword={showPassword}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
    />
  );
}
