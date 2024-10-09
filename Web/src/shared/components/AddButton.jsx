import { Button, styled } from "@mui/material";

const AddButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(45deg, #9c27b0, #03a9f4)",
  backgroundSize: "150% 150%",
  backgroundPosition: "left",
  border: "none",
  borderRadius: "10px",
  // width: "50px", no change?
  // padding: "10px", no change?
  height: "40px",
  cursor: "pointer",
  // justifyContent: "center", no change?
  // alignItems: "center", no change?
  color: "#fff",
  fontSize: "18px",
  transition: "background-position 0.3s ease",
  "&:hover": {
    backgroundPosition: "right",
  },
}));

export default AddButton;
