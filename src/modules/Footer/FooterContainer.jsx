import PropTypes from "prop-types";
import Footer from "./FooterView";

export default function FooterContainer({ todos }) {
  return (
    <Footer todos={todos} />
  );
}

FooterContainer.propTypes = {
  todos: PropTypes.array.isRequired,
};
