import Layout from "./LayoutView.jsx";
import Todo from "../../models/todo/todo.jsx";
import { useTodos } from "../../queries/todos/todoQueries.js";

export default function LayoutContainer() {
  const todoQuery = useTodos();

  if (todoQuery.status === "pending") return "Loading...";

  return (
    <Layout
      todos={todoQuery.data.map(
        (todo) => new Todo(todo.id, todo.todo, todo.completed)
      )}
    />
  );
}
