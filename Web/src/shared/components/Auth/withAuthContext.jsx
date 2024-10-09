import React from "react";
import { AuthProvider } from "./AuthContext";

const withAuthContext = (Component) => (props) => (
  <AuthProvider>
    <Component {...props} />
  </AuthProvider>
);

export default withAuthContext;