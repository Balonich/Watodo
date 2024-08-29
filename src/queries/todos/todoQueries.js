import {
  fetchTodos,
  addTodo,
  updateTodoStatus,
  updateTodoTitle,
  deleteTodo,
} from "../../api/todosApi.js";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useTodos() {
  return useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}

export function useAddTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
}

export function useUpdateTodoStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodoStatus,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
}

export function useUpdateTodoTitle() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodoTitle,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["todos"] }),
  });
}
