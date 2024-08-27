import PropTypes from "prop-types";
import CheckmarkContainer from "./CheckmarkContainer";
import EditingContainer from "./EditingContainer";

export default function TodoItem({
  todoProp,
  checkedHandler,
  editSaveHandler,
  deleteHandler,
  isEditing,
  setIsEditing,
  editText,
  setEditText,
  editClickHandler,
}) {
  return (
    <li className="task-item">
      <CheckmarkContainer todoProp={todoProp} checkedHandler={checkedHandler} />
      {isEditing ? (
        <EditingContainer
          todoProp={todoProp}
          editSaveHandler={editSaveHandler}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editText={editText}
          setEditText={setEditText}
        />
      ) : (
        <>
          <span className={todoProp.completed ? "task-text done" : "task-text"}>
            {todoProp.title}
          </span>
          <button className="edit-button" onClick={editClickHandler}>
            <span></span>
          </button>
          <button
            className="delete-button"
            onClick={() => deleteHandler(todoProp)}
          >
            <span></span>
          </button>
        </>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todoProp: PropTypes.object.isRequired,
  checkedHandler: PropTypes.func.isRequired,
  editSaveHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  setIsEditing: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  setEditText: PropTypes.func.isRequired,
  editClickHandler: PropTypes.func.isRequired,
};
