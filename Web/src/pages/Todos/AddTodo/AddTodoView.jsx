import PropTypes from "prop-types";
import { Box, Button, InputBase } from "@mui/material";
import AddButton from "../../../components/AddButton";
import { useTheme } from "@emotion/react";
import InputBox from "../../../components/InputBox";

export default function AddTodo({ addHandler, taskText, setTaskText }) {
  const theme = useTheme();

  return (
    <InputBox component="section">
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
    </InputBox>
  );
}

AddTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  setTaskText: PropTypes.func.isRequired,
};
