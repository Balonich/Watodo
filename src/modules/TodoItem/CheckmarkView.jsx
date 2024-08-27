import PropTypes from "prop-types";

export default function Checkmark({ todoProp, checkedHandler }) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        checked={todoProp.completed}
        onClick={() => checkedHandler(todoProp)}
        onChange={() => {}} // This is to prevent a warning message in the console
      />
      <span className="checkmark"></span>
    </label>
  );
}

Checkmark.propTypes = {
    todoProp: PropTypes.object.isRequired,
    checkedHandler: PropTypes.func.isRequired,
};
