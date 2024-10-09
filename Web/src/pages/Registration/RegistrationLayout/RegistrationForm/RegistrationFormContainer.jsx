import { useContext, useState } from "react";
import RegistrationForm from "./RegistrationFormView";
import { useNavigate } from "react-router-dom";
import { RegistrationContext } from "../../RegistrationContext";
import { addUser } from "../../../../api/usersApi";
import { useError } from "../../../../shared/components/Error/ErrorContext";

export default function RegistrationFormContainer() {
  const navigate = useNavigate();
  const { email, username, password, confirmPassword } =
    useContext(RegistrationContext);
  const { showError } = useError();

  async function handleSubmit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      showError("Passwords do not match");
      return;
    }

    try {
      const response = await addUser({
        email,
        password,
        username,
      });

      if (response.status === 200) {
        localStorage.setItem("Authorization", `Bearer ${response.data.token}`);
        navigate("/todos"); // TODO: Use loader from react-router
      } else {
        showError("Registration failed");
      }
    } catch (error) {
      showError(`${error.message}`); // TODO: rewrite code to get response and check that code it 409
    }
  }

  return <RegistrationForm handleSubmit={handleSubmit} />;
}
