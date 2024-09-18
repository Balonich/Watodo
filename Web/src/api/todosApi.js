import axiosInstance from "./axiosInstance";

export async function fetchTodos() {
  try {
    const response = await axiosInstance.get("/todos");

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function addTodo(todoTitle) {
  try {
    const response = await axiosInstance.post("/todos/add", {
      title: todoTitle,
      completed: false,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function updateTodo(todo) {
  try {
    const response = await axiosInstance.put(`todos/${todo.id}`, {
      ...todo,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await axiosInstance.delete(`todos/${todoId}`);

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}
