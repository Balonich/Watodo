import PropType from "prop-types";

export default function TodoItemsList({ children }) {
  return <ul className="task-list">{children}</ul>;
}

TodoItemsList.propTypes = {
  children: PropType.node.isRequired,
};
