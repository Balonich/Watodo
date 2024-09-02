import axios from "axios";
import { BASE_URL } from "./config";

export async function fetchTodos() {
  try {
    const response = await axios.get(`${BASE_URL}`);

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function addTodo(todoTitle) {
  try {
    const response = await axios.post(`${BASE_URL}/add`, {
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
    const response = await axios.put(`${BASE_URL}/${todo.id}`, {
      ...todo,
    });

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}

export async function deleteTodo(todoId) {
  try {
    const response = await axios.delete(`${BASE_URL}/${todoId}`);

    return response.data;
  } catch (error) {
    throw new Error(`Something went wrong ${error}`);
  }
}
