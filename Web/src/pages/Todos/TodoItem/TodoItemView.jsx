import PropTypes from "prop-types";
import CheckmarkContainer from "./Checkmark/CheckmarkContainer";
import EditingContainer from "./Editing/EditingContainer";
import TodoItemInfoContainer from "./TodoItemInfo/TodoItemInfoContainer";
import { ListItem } from "@mui/material";

export default function TodoItem({
  todoProp,
  isEditing,
  setIsEditing,
  editText,
  setEditText,
  editClickHandler,
}) {
  return (
    <ListItem>
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
    </ListItem>
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
