import { Link } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="container">
      <h1>This Is Watodo</h1>
      <Link to="/todos">Go to Todos</Link>
    </div>
  );
}
