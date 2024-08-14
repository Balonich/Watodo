import { useState, useRef, useEffect } from "react";

export default function TodoItem({
  todoProp,
  checkedHandler,
  editSaveHandler,
  deleteHandler,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todoProp.title);
  const inputRef = useRef(null);

  const handleEditClick = () => {
    setEditText(todoProp.title);
    setIsEditing(true);
  };

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
    <li className="task-item">
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todoProp.completed}
          onClick={() => checkedHandler(todoProp)}
        />
        <span className="checkmark"></span>
      </label>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            className="edit-input"
            ref={inputRef}
          />
          <button className="save-button" onClick={handleSaveClick}>
            💾
          </button>
          <button className="cancel-button" onClick={handleCancelClick}>
            ❌
          </button>
        </>
      ) : (
        <>
          <span className={todoProp.completed ? "task-text done" : "task-text"}>
            {todoProp.title}
          </span>
          <button className="edit-button" onClick={handleEditClick}>
            ✏️
          </button>
          <button
            className="delete-button"
            onClick={() => deleteHandler(todoProp)}
          >
            🗑️
          </button>
        </>
      )}
    </li>
  );
}
