import React from "react";
import CustomInput from "../../CustomInput";

export default function UsernameInput({ username, handleUsernameChange }) {
  return (
    <CustomInput
      label="Username"
      type="username"
      value={username}
      onChange={handleUsernameChange}
    />
  );
}
