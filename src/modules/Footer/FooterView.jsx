import PropTypes from "prop-types";

export default function Footer({ todos }) {
  return (
    <footer>
      <span>
        You have{" "}
        <span className="task-count">
          {todos.filter((todo) => !todo.completed).length}
        </span>{" "}
        tasks remaining
      </span>
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
};
