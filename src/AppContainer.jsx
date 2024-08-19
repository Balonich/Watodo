import App from "./AppView.jsx";
import Todo from "./models/todo/todo.jsx";
import { useState, useEffect } from "react";

export default function AppContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=5")
      .then((response) => response.json())
      .then((data) => {
        const todosData = data.todos.map(
          (item) => new Todo(item.id, item.todo, item.completed)
        );
        setTodos(todosData);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  function handleAdd(todoTitle) {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: todoTitle,
        completed: false,
        userId: 1,
      }),
    })
      .then((result) => result.json())
      .then((newTodo) =>
        setTodos([...todos, new Todo(todos.length + 1, newTodo.todo)])
      )
      .catch((error) => console.error("Error adding todo:", error));
  }

  function handleChecked(todo) {
    fetch(`https://dummyjson.com/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        completed: !todo.completed,
      }),
    })
      .then((result) => result.json())
      .then((updatedTodo) =>
        setTodos(
          todos.map((t) => {
            if (t.id === updatedTodo.id) {
              return { ...t, completed: updatedTodo.completed };
            }
            return t;
          })
        )
      )
      .catch((error) => console.error("Error updating todo:", error));
  }

  function handleEditSave(newTitle, todo) {
    fetch(`https://dummyjson.com/todos/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: newTitle,
      }),
    })
      .then((result) => result.json())
      .then((updatedTodo) =>
        setTodos(
          todos.map((t) => {
            if (t.id === todo.id) {
              return { ...t, title: updatedTodo.todo };
            }
            return t;
          })
        )
      )
      .catch((error) => console.error("Error updating todo:", error));
  }

  function handleDelete(todo) {
    fetch(`https://dummyjson.com/todos/${todo.id}`, {
      method: "DELETE",
    }).then(() => setTodos(todos.filter((t) => t.id !== todo.id)));
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
