import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_NavigationLayout/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="text-blue-500 text-xl">Hello "/about"!</div>
    </div>
  );
}
