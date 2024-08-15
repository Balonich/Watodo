import App from "./AppView.jsx";
import Todo from "./models/todo/todo.jsx";
import { useState } from "react";
import importedTodos from "./data/todos.json";

export default function AppContainer() {
  const [todos, setTodos] = useState(
    importedTodos.map((todo) => new Todo(todo.id, todo.title, todo.completed))
  );

  function handleAdd(todoTitle) {
    setTodos([...todos, new Todo(todos.length + 1, todoTitle)]);
  }

  function handleChecked(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  }

  function handleEditSave(newTitle, todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, title: newTitle };
        }
        return t;
      })
    );
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <App
      todos={todos}
      handleAdd={handleAdd}
      handleChecked={handleChecked}
      handleEditSave={handleEditSave}
      handleDelete={handleDelete}
    />
  );
}
