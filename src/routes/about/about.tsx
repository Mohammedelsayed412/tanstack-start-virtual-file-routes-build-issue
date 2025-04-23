import { createFileRoute, Link } from "@tanstack/react-router";
import { aboutServerFn } from "./actions";
export const Route = createFileRoute("/_NavigationLayout/about")({
  component: RouteComponent,
  loader: async () => {
    await aboutServerFn();
    return {
      message: "Hello from about loader",
    };
  },
});

function RouteComponent() {
  return (
    <div>
      <div className="text-blue-500 text-xl">Hello "/about"!</div>
    </div>
  );
}
