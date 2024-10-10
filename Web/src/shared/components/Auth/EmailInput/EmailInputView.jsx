import React from "react";
import CustomInput from "../../CustomInput";

export default function EmailInput({ email, handleEmailChange }) {
  return (
    <CustomInput
      label="Email"
      type="email"
      value={email}
      onChange={handleEmailChange}
    />
  );
}
