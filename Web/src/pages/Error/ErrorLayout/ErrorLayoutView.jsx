import { Typography } from "@mui/material";
import GlassCard from "../../../components/GlassCard";

export default function ErrorLayout({ error }) {
  return (
    <GlassCard>
      <Typography variant="h1">Oops!</Typography>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </GlassCard>
  );
}
