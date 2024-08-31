import PropTypes from "prop-types";

export default function AddTodo({ addHandler, taskText, setTaskText }) {
  return (
    <section className="task-input">
      <input
        type="text"
        id="new-task"
        placeholder="Add a new task..."
        onChange={(e) => setTaskText(e.target.value)}
        value={taskText}
      />
      <button
        id="add-task"
        onClick={() => {
          if (taskText) {
            addHandler(taskText);
            setTaskText("");
          }
        }}
      >
        <span>+</span>
      </button>
    </section>
  );
}

AddTodo.propTypes = {
  addHandler: PropTypes.func.isRequired,
  taskText: PropTypes.string.isRequired,
  setTaskText: PropTypes.func.isRequired,
};
