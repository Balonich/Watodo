import React from "react";
import GlassCard from "../../../shared/components/GlassCard.jsx";
import { Typography } from "@mui/material";
import LoginFormContainer from "./LoginForm/LoginFormContainer.jsx";
import DividerWithText from "../../../shared/components/DividerWithText.jsx";
import SocialLoginButtons from "../../../shared/components/Auth/SocialLoginButtons/SocialLoginButtonsView.jsx";
import CreateAccountLink from "./CreateAccountLink/CreateAccountLinkView.jsx";

export default function LoginLayoutView() {
  return (
    <GlassCard>
      <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "left" }}>
        Welcome back!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, textAlign: "left" }}>
        Login to your Account
      </Typography>

      <LoginFormContainer />

      <DividerWithText text="or" />

      <SocialLoginButtons />

      <CreateAccountLink />
    </GlassCard>
  );
}
