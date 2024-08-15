import { useState } from "react";
import AddTodo from "./AddTodoView";
import PropTypes from "prop-types";

export default function AddTodoContainer({ addHandler }) {
  const [taskText, setTaskText] = useState("");

  return (
    <AddTodo
      addHandler={addHandler}
      taskText={taskText}
      setTaskText={setTaskText}
    />
  );
}

AddTodoContainer.propTypes = {
  addHandler: PropTypes.func.isRequired,
};
