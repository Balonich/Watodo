import Layout from "./LayoutView.jsx";
import Todo from "../../models/todo/todo.jsx";
import {
  fetchTodos,
  addTodo,
  updateTodoStatus,
  updateTodoTitle,
  deleteTodo,
} from "../../api/todosApi.js";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function useTodos() {
  return useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}

export default function LayoutContainer() {
  const queryClient = useQueryClient();
  const todoQuery = useTodos();

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const updateTodoStatusMutation = useMutation({
    mutationFn: updateTodoStatus,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const updateTodoTitleMutation = useMutation({
    mutationFn: updateTodoTitle,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });

  function handleAdd(todoTitle) {
    addTodoMutation.mutate(todoTitle);
  }

  function handleChecked(todo) {
    updateTodoStatusMutation.mutate(todo.id, !todo.completed);
  }

  function handleEditSave(newTitle, todo) {
    updateTodoTitleMutation.mutate(todo.id, newTitle);
  }

  function handleDelete(todo) {
    deleteTodoMutation.mutate(todo.id);
  }

  if (todoQuery.status === "pending") return "Loading...";

  return (
    <Layout
      todos={todoQuery.data.map(
        (todo) => new Todo(todo.id, todo.todo, todo.completed)
      )}
      handleAdd={handleAdd}
      handleChecked={handleChecked}
      handleEditSave={handleEditSave}
      handleDelete={handleDelete}
    />
  );
}
