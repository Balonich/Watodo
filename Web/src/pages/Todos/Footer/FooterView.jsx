import { Typography } from "@mui/material";
import PropTypes from "prop-types";

export default function Footer({ todos }) {
  return (
    <footer>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
        }}
      >
        You have {todos.filter((todo) => !todo.completed).length} tasks
        remaining
      </Typography>
    </footer>
  );
}

Footer.propTypes = {
  todos: PropTypes.array.isRequired,
};
