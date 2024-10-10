import { useContext } from "react";
import LoginForm from "./LoginFormView";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../shared/components/Auth/AuthContext";
import { useError } from "../../../../shared/components/Error/ErrorContext";
import { loginUser } from "../../../../api/usersApi";

export default function LoginFormContainer() {
  const navigate = useNavigate();
  const { email, password } = useContext(AuthContext);
  const { showError } = useError();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await loginUser({ email, username: "", password });

      if (response.status === 200) {
        localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
        navigate("/todos"); // TODO: Use loader from react-router
      } else {
        showError("Login failed");
      }
    } catch (error) {
      showError(`${error.message}`);
    }
  }
  return <LoginForm handleSubmit={handleSubmit} />;
}
