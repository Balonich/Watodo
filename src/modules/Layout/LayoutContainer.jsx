import Layout from "./LayoutView.jsx";
import Todo from "../../models/todo/todo.jsx";
import { useState, useEffect } from "react";
import {
  fetchTodos,
  addTodo,
  updateTodoStatus,
  updateTodoTitle,
  deleteTodo,
} from "../../api/todosApi.js";

export default function LayoutContainer() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos()
      .then((data) => {
        const todosData = data.map(
          (item) => new Todo(item.id, item.todo, item.completed)
        );
        setTodos(todosData);
      })
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  function handleAdd(todoTitle) {
    addTodo(todoTitle)
      .then((newTodo) =>
        setTodos([...todos, new Todo(todos.length + 1, newTodo.todo)])
      )
      .catch((error) => console.error("Error adding todo:", error));
  }

  function handleChecked(todo) {
    updateTodoStatus(todo.id, !todo.completed)
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
    updateTodoTitle(todo.id, newTitle)
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
    deleteTodo(todo.id).then(() =>
      setTodos(todos.filter((t) => t.id !== todo.id))
    );
  }

  return (
    <Layout
      todos={todos}
      handleAdd={handleAdd}
      handleChecked={handleChecked}
      handleEditSave={handleEditSave}
      handleDelete={handleDelete}
    />
  );
}
