import PropTypes from "prop-types";
import Checkmark from "./CheckmarkView";
import { useUpdateTodoStatus } from "../../../queries/todos/todoQueries";

export default function CheckmarkContainer({ todoProp }) {
  const updateTodoStatusMutation = useUpdateTodoStatus();

  function handleChecked(todo) {
    updateTodoStatusMutation.mutate(todo.id, !todo.completed);
  }

  return <Checkmark todoProp={todoProp} checkedHandler={handleChecked} />;
}

CheckmarkContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
};
