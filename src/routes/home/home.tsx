import { createFileRoute } from "@tanstack/react-router";
import { homeServerFn } from "./actions";

export const Route = createFileRoute("/_NavigationLayout/")({
  component: RouteComponent,
  loader: async () => {
    await homeServerFn();
    return {
      message: "Hello from home loader",
    };
  },
});

function RouteComponent() {
  return <div className="text-blue-500 text-xl">Hello "/home"!</div>;
}
