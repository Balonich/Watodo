import React from "react";
import GlassCard from "../../components/GlassCard.jsx";
import {
  Button,
  InputBase,
  Typography,
} from "@mui/material";
import InputBox from "../../components/InputBox.jsx";

export default function LoginLayout() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <GlassCard>
      <Typography
        variant="h1"
        sx={{
          textAlign: "left",
        }}
      >
        Welcome back!
      </Typography>
      <Typography variant="body" sx={{ color: "#c641dd" }}>
        Sign in to your account
      </Typography>

      <form onSubmit={handleSubmit}>
        <Typography variant="body">Email</Typography>
        <InputBox component="section">
          <InputBase
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </InputBox>

        <Typography variant="body">Password</Typography>
        <InputBox component="section">
          <InputBase
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </InputBox>
        <Button type="submit" variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </GlassCard>
  );
}
