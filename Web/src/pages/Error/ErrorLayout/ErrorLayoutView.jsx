import { Typography } from "@mui/material";
import GlassCard from "../../../shared/components/GlassCard";
import { Link } from "react-router-dom";

export default function ErrorLayout({ error }) {
  return (
    <GlassCard>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant="body">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body">
        <i> {error.statusText || error.message} </i>
      </Typography>
      <Link to="/">Go back to the home page</Link>
    </GlassCard>
  );
}
