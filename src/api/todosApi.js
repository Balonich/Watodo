import { BASE_URL } from "./config";

export async function fetchTodos() {
  const response = await fetch(`${BASE_URL}?limit=5`);

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const data = await response.json();
  return data.todos;
}

export async function addTodo(todoTitle) {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: todoTitle,
      completed: false,
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const newTodo = await response.json();
  return newTodo;
}

export async function updateTodoStatus(todoId, completed) {
  const response = await fetch(`${BASE_URL}/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      completed: completed,
    }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const updatedTodo = await response.json();
  return updatedTodo;
}

export async function updateTodoTitle(todoId, newTitle) {
  const response = await fetch(`${BASE_URL}/${todoId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      todo: newTitle,
    }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const updatedTodo = await response.json();
  return updatedTodo;
}

export async function deleteTodo(todoId) {
  const response = await fetch(`${BASE_URL}/${todoId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Something went wrong.");
  }

  const deletedTodo = await response.json();
  return deletedTodo;
}
