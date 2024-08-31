import axios from "axios";
import { BASE_URL } from "./config";

export async function fetchTodos() {
  try {
    const response = await axios.get(`${BASE_URL}?limit=5`);
    
    return response.data.todos;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function addTodo(todoTitle) {
  try {
    const response = await axios.post(`${BASE_URL}/add`, {
      todo: todoTitle,
      completed: false,
      userId: 1,
    });

    return response.data.todo;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function updateTodoStatus(todoId, completed) {
  try {
    const response = await axios.put(`${BASE_URL}/${todoId}`, {
      completed: completed,
    });

    return response.data.todo;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function updateTodoTitle(todoId, newTitle) {
  try {
    const response = await axios.put(`${BASE_URL}/${todoId}`, {
      todo: newTitle,
    });

    return response.data.todo;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await axios.delete(`${BASE_URL}/${todoId}`);

    return response.data.todo;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}
