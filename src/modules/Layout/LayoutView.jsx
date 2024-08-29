import PropTypes from "prop-types";
import TodoItemContainer from "../TodoItem/TodoItemContainer.jsx";
import AddTodoContainer from "../AddTodo/AddTodoContainer.jsx";
import Footer from "../Footer/FooterView.jsx";
import TodoItemsList from "../TodoItemsList/TodoItemsListView.jsx";

export default function Layout({
  todos,
}) {
  return (
    <div className="container">
      <header>
        <h1>My To Do List</h1>
      </header>

      <AddTodoContainer />

      <TodoItemsList>
        {todos.map((todo) => (
          <TodoItemContainer
            key={todo.id}
            todoProp={todo}
          />
        ))}
      </TodoItemsList>

      <Footer todos={todos} />
    </div>
  );
}

Layout.propTypes = {
  todos: PropTypes.array.isRequired
};
