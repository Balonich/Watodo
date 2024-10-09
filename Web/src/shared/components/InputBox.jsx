import { Box, styled } from "@mui/material";

const InputBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "20px 0",
  backgroundColor: theme.palette.secondary.main,
  border: "none",
  borderRadius: "10px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
}));

export default InputBox;