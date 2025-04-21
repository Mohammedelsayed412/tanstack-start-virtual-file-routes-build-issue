import {
  createFileRoute,
  Outlet,
  useNavigate,
  useLocation,
} from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_NavigationLayout")({
  component: NavegationLayout,
});

export default function NavegationLayout() {
  return (
    <div className="flex h-full min-h-screen">
      Layout
      <Outlet />
    </div>
  );
}
