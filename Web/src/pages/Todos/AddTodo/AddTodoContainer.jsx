import { useState, useCallback } from "react";
import AddTodo from "./AddTodoView";
import { useAddTodo } from "../../../queries/todos/todoQueries";

export default function AddTodoContainer() {
  const [taskText, setTaskText] = useState("");
  const addTodoMutation = useAddTodo();

  // Use useCallback to memoize the handleAdd function
  const handleAdd = useCallback(
    (todoTitle) => {
      addTodoMutation.mutate(todoTitle);
    },
    [addTodoMutation]
  );

  return (
    <AddTodo
      addHandler={handleAdd}
      taskText={taskText}
      setTaskText={setTaskText}
    />
  );
}
