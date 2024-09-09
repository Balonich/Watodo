import PropTypes from "prop-types";
import { Box, Button, InputBase } from "@mui/material";
import AddButton from "../../../components/AddButton";
import { useTheme } from "@emotion/react";

export default function AddTodo({ addHandler, taskText, setTaskText }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0",
        backgroundColor: theme.palette.secondary.main,
        border: "none",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
      }}
    >
      <InputBase
        type="text"
        placeholder="Add a new task..."
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
      />
      <AddButton
        onClick={() => {
          if (taskText) {
            addHandler(taskText);
            setTaskText("");
          }
        }}
      >
        <span>+</span>
      </AddButton>
    </Box>
  );
}

AddTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  setTaskText: PropTypes.func.isRequired,
};
