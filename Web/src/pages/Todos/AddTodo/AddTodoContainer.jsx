import { useState } from "react";
import AddTodo from "./AddTodoView";
import { useAddTodo } from "../../../queries/todos/todoQueries";

export default function AddTodoContainer() {
  const [taskText, setTaskText] = useState("");
  const addTodoMutation = useAddTodo();

  function handleAdd(todoTitle) {
    addTodoMutation.mutate(todoTitle);
  }

  return (
    <AddTodo
      addHandler={handleAdd}
      taskText={taskText}
      setTaskText={setTaskText}
    />
  );
}
