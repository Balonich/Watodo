import { Container, styled } from "@mui/material";

const GlassCard = styled(Container)(({ theme }) => ({
  backgroundColor: "#1c1c1e4f",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "15px",
  padding: "20px",
  width: "400px",
  boxShadow:
    "0px 4px 30px rgba(0, 0, 0, 0.4), inset 0px 0px 20px rgba(255, 255, 255, 0.2)",
}));

export default GlassCard;
