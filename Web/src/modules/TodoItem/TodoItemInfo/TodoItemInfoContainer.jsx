import { useDeleteTodo } from "../../../queries/todos/todoQueries";
import PropTypes from "prop-types";
import TodoItemInfo from "./TodoItemInfoView";

export default function TodoItemInfoContainer({ todoProp, editClickHandler }) {
  const deleteTodoMutation = useDeleteTodo();

  function handleDelete(todo) {
    deleteTodoMutation.mutate(todo.id);
  }

  return (
    <TodoItemInfo
      todoProp={todoProp}
      deleteHandler={handleDelete}
      editClickHandler={editClickHandler}
    />
  );
}

TodoItemInfoContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
  editClickHandler: PropTypes.func.isRequired,
};
