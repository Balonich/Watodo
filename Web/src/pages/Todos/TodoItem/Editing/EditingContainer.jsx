import PropTypes from "prop-types";
import Editing from "./EditingView";
import { useRef, useEffect } from "react";
import { useUpdateTodo } from "../../../../queries/todos/todoQueries";

export default function EditingContainer({
  todoProp,
  isEditing,
  setIsEditing,
  editText,
  setEditText,
}) {
  const inputRef = useRef(null);
    const updateTodoMutation = useUpdateTodo();

  function handleEditSave(newTitle, todo) {
    updateTodoMutation.mutate({...todo, title: newTitle});
  }

  const handleSaveClick = () => {
    handleEditSave(editText, todoProp);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditText(todoProp.title);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <Editing
      editText={editText}
      inputChangeHandler={handleInputChange}
      inputRef={inputRef}
      saveHandler={handleSaveClick}
      cancelHandler={handleCancelClick}
    />
  );
}

EditingContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
};
