import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function DividerWithText({ text }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: 2,
        position: "relative",
        width: "100%",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: "50%",
          width: "40%",
          height: "1px",
          backgroundColor: `${theme.palette.accent.main}`,
        },
        "&::before": {
          left: 0,
        },
        "&::after": {
          right: 0,
        },
      }}
    >
      <Typography variant="body">{text}</Typography>
    </Box>
  );
}