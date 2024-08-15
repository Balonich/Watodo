import PropType from "prop-types";
import TodoItemsList from "./TodoItemsListView";

export default function TodoItemsListContainer({ children }) {
  return <TodoItemsList>{children}</TodoItemsList>;
}

TodoItemsListContainer.propTypes = {
  children: PropType.node.isRequired,
};
