import TodosLayout from "./TodosLayoutView.jsx";
import Todo from "../../../models/todo/todo.jsx";
import { useTodos } from "../../../queries/todos/todoQueries.js";

export default function TodosLayoutContainer() {
  const todoQuery = useTodos();

  if (todoQuery.status === "pending") return "Loading...";

  return (
    <TodosLayout
      todos={todoQuery.data.map(
        (todo) => new Todo(todo.id, todo.title, todo.completed)
      )}
    />
  );
}
