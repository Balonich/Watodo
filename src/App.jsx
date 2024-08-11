import TodoItem from "./components/TodoItem.jsx";
import Todo from "./models/todo/todo.jsx";
import { useState } from "react";
import importedTodos from "./data/todos.json";
import AddTodo from "./components/AddTodo.jsx";

function App() {
  const [todos, setTodos] = useState(
    importedTodos.map((todo) => new Todo(todo.id, todo.title, todo.completed))
  );

  function handleAdd(todoTitle) {
    setTodos([...todos, new Todo(todos.length + 1, todoTitle)]);
  }

  function handleChecked(todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  }

  function handleEditSave(newTitle, todo) {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return { ...t, title: newTitle };
        }
        return t;
      })
    );
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  return (
    <div className="container">
      <header>
        <h1>My To Do List</h1>
      </header>

      <AddTodo addHandler={handleAdd} />

      <ul className="task-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todoProp={todo}
            checkedHandler={handleChecked}
            editSaveHandler={handleEditSave}
            deleteHandler={handleDelete}
          />
        ))}
      </ul>

      <footer>
        <span>
          You have{" "}
          <span className="task-count">
            {todos.filter((todo) => !todo.completed).length}
          </span>{" "}
          tasks remaining
        </span>
      </footer>
    </div>
  );
}

export default App;
