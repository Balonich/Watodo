import { Checkbox } from "@mui/material";
import PropTypes from "prop-types";
import CheckIcon from "@mui/icons-material/Check";

export default function Checkmark({ todoProp, checkedHandler }) {
  return (
    <Checkbox
      checked={todoProp.completed}
      onClick={() => checkedHandler(todoProp)}
      onChange={() => {}}
      sx={{
        marginLeft: "15px",
      }}
      checkedIcon={
        <CheckIcon sx={{ color: "white", width: "18px", height: "18px" }} />
      }
    />
  );
}
Checkmark.propTypes = {
  todoProp: PropTypes.object.isRequired,
  checkedHandler: PropTypes.func.isRequired,
};
