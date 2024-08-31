import TodoItem from "./TodoItemView";
import PropTypes from "prop-types";
import { useState } from "react";

export default function TodoItemContainer({ todoProp }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoProp.title);

  const handleEditClick = () => {
    setEditText(todoProp.title);
    setIsEditing(true);
  };

  return (
    <TodoItem
      todoProp={todoProp}
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
};
