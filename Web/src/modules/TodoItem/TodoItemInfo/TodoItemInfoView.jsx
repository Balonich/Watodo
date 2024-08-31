import PropTypes from "prop-types";

export default function TodoItemInfo({
  todoProp,
  deleteHandler,
  editClickHandler,
}) {
  return (
    <>
      <span className={todoProp.completed ? "task-text done" : "task-text"}>
        {todoProp.title}
      </span>
      <button className="edit-button" onClick={editClickHandler}>
        <span></span>
      </button>
      <button className="delete-button" onClick={() => deleteHandler(todoProp)}>
        <span></span>
      </button>
    </>
  );
}

TodoItemInfo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editClickHandler: PropTypes.func.isRequired,
};
