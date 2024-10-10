import PropType from "prop-types";
import { List } from "@mui/material";

export default function TodoItemsList({ children }) {
  return <List>{children}</List>;
}

TodoItemsList.propTypes = {
  children: PropType.node.isRequired,
};
