import PropTypes from "prop-types";
import Checkmark from "./CheckmarkView";
import { useUpdateTodo } from "../../../../queries/todos/todoQueries";

export default function CheckmarkContainer({ todoProp }) {
  const updateTodoMutation = useUpdateTodo();

  function handleChecked(todo) {
    updateTodoMutation.mutate({...todo, completed: !todo.completed});
  }

  return <Checkmark todoProp={todoProp} checkedHandler={handleChecked} />;
}

CheckmarkContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
};
