import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CreateAccountLink() {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
      <Typography>
        Don’t have an Account?{" "}
        <Typography
          component="span"
          color={theme.palette.accent.main}
          sx={{ cursor: "pointer" }}
        >
          Create!
        </Typography>
      </Typography>
    </Box>
  );
}