import PropTypes from "prop-types";

export default function Editing({
  editText,
  inputChangeHandler,
  inputRef,
  saveHandler,
  cancelHandler,
}) {
  return (
    <>
      <input
        type="text"
        value={editText}
        onChange={inputChangeHandler}
        className="edit-input"
        ref={inputRef}
      />
      <button className="save-button" onClick={saveHandler}>
        <span></span>
      </button>
      <button className="cancel-button" onClick={cancelHandler}>
        <span></span>
      </button>
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
