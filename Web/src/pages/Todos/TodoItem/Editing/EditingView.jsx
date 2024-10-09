import PropTypes from "prop-types";
import { InputBase, IconButton } from "@mui/material";
import Icon from "../../../../shared/components/Icon";
import { useTheme } from "@emotion/react";

export default function Editing({
  editText,
  inputChangeHandler,
  inputRef,
  saveHandler,
  cancelHandler,
}) {
  const theme = useTheme();

  return (
    <>
      <InputBase
        type="text"
        value={editText}
        onChange={inputChangeHandler}
        sx={{
          background: "#454547",
          color: theme.palette.text.primary,
          fontSize: "16px",
          padding: "1px 8px",
          borderRadius: "10px",
          marginRight: "15px",
          marginLeft: "5px",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
        ref={inputRef}
      />
      <IconButton onClick={saveHandler}>
        <Icon type="save" />
      </IconButton>
      <IconButton onClick={cancelHandler}>
        <Icon type="cancel" />
      </IconButton>
    </>
  );
}

Editing.propTypes = {
  editText: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  inputRef: PropTypes.object.isRequired,
  saveHandler: PropTypes.func.isRequired,
  cancelHandler: PropTypes.func.isRequired,
};
