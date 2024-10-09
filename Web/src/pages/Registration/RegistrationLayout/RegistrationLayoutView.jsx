import React from "react";
import GlassCard from "../../../shared/components/GlassCard.jsx";
import { Typography } from "@mui/material";
import RegistrationFormContainer from "./RegistrationForm/RegistrationFormContainer.jsx";
import DividerWithText from "../../../shared/components/DividerWithText.jsx";
import SocialLoginButtons from "../../../shared/components/Auth/SocialLoginButtons/SocialLoginButtonsView.jsx";

export default function RegistrationLayoutView() {
  return (
    <GlassCard>
      <Typography variant="h4" sx={{ fontWeight: 600, textAlign: "left" }}>
        Join Us!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, textAlign: "left" }}>
        Create your Account
      </Typography>

      <RegistrationFormContainer />

      <DividerWithText text="or" />

      <SocialLoginButtons />
    </GlassCard>
  );
}
