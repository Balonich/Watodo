import PropTypes from "prop-types";
import TodoItemContainer from "../TodoItem/TodoItemContainer.jsx";
import AddTodoContainer from "../AddTodo/AddTodoContainer.jsx";
import Footer from "../Footer/FooterView.jsx";
import TodoItemsList from "../TodoItemsList/TodoItemsListView.jsx";
import { Container, Typography } from "@mui/material";
import GlassCard from "../../../components/GlassCard.jsx";

export default function TodosLayout({ todos }) {
  return (
    <GlassCard>
      <header>
        <Typography variant="h1">My To Do List</Typography>
      </header>

      <AddTodoContainer />

      <TodoItemsList>
        {todos.map((todo) => (
          <TodoItemContainer key={todo.id} todoProp={todo} />
        ))}
      </TodoItemsList>

      <Footer todos={todos} />
    </GlassCard>
  );
}

TodosLayout.propTypes = {
  todos: PropTypes.array.isRequired,
};
