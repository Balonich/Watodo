import { Link } from "react-router-dom";
import GlassCard from "../../../components/GlassCard";
import { Typography } from "@mui/material";

export default function HomeLayout() {
  return (
    <GlassCard>
      <Typography variant="h1">This Is Watodo</Typography>
      <Link to="/todos">Go to Todos</Link>
    </GlassCard>
  );
}
