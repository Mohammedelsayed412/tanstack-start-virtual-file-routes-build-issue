import {
  createFileRoute,
  lazyRouteComponent,
  Link,
} from "@tanstack/react-router";
import { aboutServerFn } from "./actions";
export const Route = createFileRoute("/_NavigationLayout/about")({
  component: lazyRouteComponent(() => import("./about.lazy")),
  loader: async () => {
    await aboutServerFn();
    return {
      message: "Hello from about loader",
    };
  },
});
