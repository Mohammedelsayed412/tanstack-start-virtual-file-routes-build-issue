import {
  createFileRoute,
  Outlet,
  useNavigate,
  useLocation,
  Link,
} from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_NavigationLayout")({
  component: NavegationLayout,
});

export default function NavegationLayout() {
  return (
    <div className="flex flex-col gap-6 h-full min-h-screen">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Layout</div>
          <div className="flex gap-4">
            <Link
              to="/"
              className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-white hover:bg-gray-700 rounded-md transition"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
