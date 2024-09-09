import PropTypes from "prop-types";
import { Typography, IconButton } from "@mui/material";
import Icon from "../../../../components/Icon";
import { useTheme } from "@emotion/react";

export default function TodoItemInfo({
  todoProp,
  deleteHandler,
  editClickHandler,
}) {
  const theme = useTheme();

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          flexGrow: 1,
          color: todoProp.completed ? "#a1a1a3" : theme.palette.text.primary,
          fontSize: "16px",
          lineHeight: "1.5",
          padding: "5px 13px",
          width: 0,
          textDecoration: todoProp.completed ? "line-through" : "none",
        }}
      >
        {todoProp.title}
      </Typography>
      <IconButton onClick={editClickHandler}>
        <Icon type="edit" />
      </IconButton>
      <IconButton onClick={() => deleteHandler(todoProp)}>
        <Icon type="delete" />
      </IconButton>
    </>
  );
}

TodoItemInfo.propTypes = {
  todoProp: PropTypes.object.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  editClickHandler: PropTypes.func.isRequired,
};
