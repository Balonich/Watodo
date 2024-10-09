import React from "react";
import { FormControl, Typography, InputBase, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@emotion/react";

export default function CustomInput({
  label,
  type,
  value,
  onChange,
  showPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
}) {
  const theme = useTheme();

  return (
    <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
      <Typography variant="body" sx={{ textAlign: "left" }}>
        {label}
      </Typography>
      <InputBase
        type={type}
        value={value}
        onChange={onChange}
        required
        endAdornment={
          label === "Password" && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ mr: 0 }}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "10px",
          transition: "background-color 0.3s ease",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
          "&.Mui-focused": {
            backgroundColor: "rgba(255, 255, 255, 0.2)",
          },
        }}
      />
    </FormControl>
  );
}