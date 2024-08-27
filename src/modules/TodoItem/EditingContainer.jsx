import PropTypes from "prop-types";
import Editing from "./EditingView";
import { useRef, useEffect } from "react";

export default function EditingContainer({
  todoProp,
  editSaveHandler,
  isEditing,
  setIsEditing,
  editText,
  setEditText,
}) {
  const inputRef = useRef(null);

  const handleSaveClick = () => {
    editSaveHandler(editText, todoProp);
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
  editSaveHandler: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
};
