import TodoItem from "./TodoItemView";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoItemContainer({
  todoProp,
  checkedHandler,
  editSaveHandler,
  deleteHandler,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoProp.title);

  const handleEditClick = () => {
    setEditText(todoProp.title);
    setIsEditing(true);
  };

  return (
    <TodoItem
      todoProp={todoProp}
      checkedHandler={checkedHandler}
      deleteHandler={deleteHandler}
      editSaveHandler={editSaveHandler}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      editText={editText}
      setEditText={setEditText}
      editClickHandler={handleEditClick}
    />
  );
}

TodoItemContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
  checkedHandler: PropTypes.func.isRequired,
  editSaveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
