import {
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} from "../../api/todosApi.js";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

async function onMutateHandler(queryClient, updateFn) {
  // Cancel any outgoing refetches
  await queryClient.cancelQueries({ queryKey: ["todos"] });

  // Snapshot the previous value
  const previousTodos = queryClient.getQueryData(["todos"]);

  // Optimistically update to the new value
  queryClient.setQueryData(["todos"], updateFn);

  // Return a context object with the snapshotted value
  return { previousTodos };
}

function onErrorHandler(queryClient, context) {
  // If the mutation fails,
  // use the context returned from onMutate to roll back
  queryClient.setQueryData(["todos"], context.previousTodos);
}

async function onSettledHandler(queryClient) {
  return await queryClient.invalidateQueries({ queryKey: ["todos"] });
}

export function useTodos() {
  return useQuery({ queryKey: ["todos"], queryFn: fetchTodos });
}

export function useAddTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onMutate: async (newTodoTitle) =>
      await onMutateHandler(queryClient, (old) => {
        const tempTodoObj = {
          title: newTodoTitle,
          id: new Date().getTime(),
          completed: false,
        };
        return [...old, tempTodoObj];
      }),
    onError: (err, newTodo, context) => onErrorHandler(queryClient, context),
    onSettled: () => onSettledHandler(queryClient),
  });
}

export function useUpdateTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) =>
      await onMutateHandler(queryClient, (old) =>
        old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
      ),
    onError: (err, updatedTodo, context) =>
      onErrorHandler(queryClient, context),
    onSettled: () => onSettledHandler(queryClient),
  });
}

export function useDeleteTodo() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTodo,
    onMutate: async (deletedTodoId) =>
      await onMutateHandler(queryClient, (old) =>
        old.filter((todo) => todo.id !== deletedTodoId)
      ),
    onError: (err, deletedTodoId, context) =>
      onErrorHandler(queryClient, context),
    onSettled: async () => await onSettledHandler(queryClient),
  });
}
