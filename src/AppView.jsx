import PropTypes from "prop-types";
import TodoItemContainer from "./modules/TodoItem/TodoItemContainer.jsx";
import AddTodoContainer from "./modules/AddTodo/AddTodoContainer.jsx";
import FooterContainer from "./modules/Footer/FooterContainer.jsx";
import TodoItemsListContainer from "./modules/TodoItemsList/TodoItemsListContainer.jsx";

export default function App({
  todos,
  handleAdd,
  handleChecked,
  handleEditSave,
  handleDelete,
}) {
  return (
    <div className="container">
      <header>
        <h1>My To Do List</h1>
      </header>

      <AddTodoContainer addHandler={handleAdd} />

      <TodoItemsListContainer>
        {todos.map((todo) => (
          <TodoItemContainer
            key={todo.id}
            todoProp={todo}
            checkedHandler={handleChecked}
            editSaveHandler={handleEditSave}
            deleteHandler={handleDelete}
          />
        ))}
      </TodoItemsListContainer>

      <FooterContainer todos={todos} />
    </div>
  );
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleChecked: PropTypes.func.isRequired,
  handleEditSave: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
