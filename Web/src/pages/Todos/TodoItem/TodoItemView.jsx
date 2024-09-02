import PropTypes from "prop-types";
import CheckmarkContainer from "./Checkmark/CheckmarkContainer";
import EditingContainer from "./Editing/EditingContainer";
import TodoItemInfoContainer from "./TodoItemInfo/TodoItemInfoContainer";

export default function TodoItem({
  todoProp,
  isEditing,
  setIsEditing,
  editText,
  setEditText,
  editClickHandler,
}) {
  return (
    <li className="task-item">
      <CheckmarkContainer todoProp={todoProp} />
      {isEditing ? (
        <EditingContainer
          todoProp={todoProp}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editText={editText}
          setEditText={setEditText}
        />
      ) : (
        <TodoItemInfoContainer
          todoProp={todoProp}
          editClickHandler={editClickHandler}
        />
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todoProp: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
  editClickHandler: PropTypes.func.isRequired,
};
