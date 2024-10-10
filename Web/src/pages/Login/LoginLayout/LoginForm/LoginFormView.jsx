import React from "react";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@emotion/react";
import EmailInputContainer from "../../../../shared/components/Auth/EmailInput/EmailInputContainer";
import PasswordInputContainer from "../../../../shared/components/Auth/PasswordInput/PasswordInputContainer";

export default function LoginForm({ handleSubmit }) {
  const theme = useTheme();

  return (
    <form onSubmit={handleSubmit}>
      <EmailInputContainer />
      <PasswordInputContainer />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            transform: "translateX(-16px)",
          }}
        >
          <Checkbox
            checkedIcon={
              <CheckIcon
                sx={{ color: "white", width: "18px", height: "18px" }}
              />
            }
            defaultChecked
          />
          <Typography variant="body" sx={{ ml: 1 }}>
            Remember me
          </Typography>
        </Box>
        <Typography
          color={theme.palette.accent.main}
          variant="body"
          sx={{ cursor: "pointer" }}
        >
          Forgot Password?
        </Typography>
      </Box>
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
        Sign In
      </Button>
    </form>
  );
}
