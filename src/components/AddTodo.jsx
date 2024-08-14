export default function AddTodo({ addHandler }) {
  return (
    <section className="task-input">
      <input type="text" id="new-task" placeholder="Add a new task..." />
      <button
        id="add-task"
        onClick={() => {
          const newTaskTitle = document.getElementById("new-task").value;
          if (newTaskTitle) {
            document.getElementById("new-task").value = "";
            addHandler(newTaskTitle);
          }
        }}
      >
        <span>+</span>
      </button>
    </section>
  );
}
