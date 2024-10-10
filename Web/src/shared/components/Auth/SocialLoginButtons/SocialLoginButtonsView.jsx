import React from "react";
import { Box, IconButton } from "@mui/material";
import { Google as GoogleIcon, Facebook as FacebookIcon } from "@mui/icons-material";

export default function SocialLoginButtons() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <IconButton sx={{ color: "white", mr: 0 }}>
        <GoogleIcon />
      </IconButton>
      <IconButton sx={{ color: "white", mr: 0 }}>
        <FacebookIcon />
      </IconButton>
    </Box>
  );
}