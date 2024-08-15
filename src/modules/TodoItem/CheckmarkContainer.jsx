import PropTypes from "prop-types";
import Checkmark from "./CheckmarkView";

export default function CheckmarkContainer({ todoProp, checkedHandler }) {
  return <Checkmark todoProp={todoProp} checkedHandler={checkedHandler} />;
}

CheckmarkContainer.propTypes = {
  todoProp: PropTypes.object.isRequired,
  checkedHandler: PropTypes.func.isRequired,
};
