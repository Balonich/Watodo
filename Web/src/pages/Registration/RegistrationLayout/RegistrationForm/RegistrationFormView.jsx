import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import EmailInputContainer from "../../../../shared/components/Auth/EmailInput/EmailInputContainer";
import PasswordInputContainer from "../../../../shared/components/Auth/PasswordInput/PasswordInputContainer";
import ConfirmPasswordInputContainer from "../../../../shared/components/Auth/ConfirmPasswordInput/ConfirmPasswordInputContainer";
import UsernameInputContainer from "../../../../shared/components/Auth/UsernameInput/UsernameInputContainer";

export default function RegistrationForm({ handleSubmit }) {
  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit}>
      <EmailInputContainer />
      <UsernameInputContainer />
      <PasswordInputContainer />
      <ConfirmPasswordInputContainer />
      <Button
        type="submit"
        fullWidth
        sx={{
          background: "linear-gradient(45deg, #9c27b0, #03a9f4)",
          backgroundSize: "150% 150%",
          backgroundPosition: "left",
          borderRadius: "10px",
          color: "#fff",
          mb: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          transition: "background-position 0.3s ease",
          "&:hover": {
            backgroundPosition: "right",
          },
        }}
      >
        Sign Up
      </Button>
    </form>
  );
}
