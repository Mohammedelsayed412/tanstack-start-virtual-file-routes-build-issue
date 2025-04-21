import { index, layout, rootRoute, route } from "@tanstack/virtual-file-routes";
export const routes = rootRoute("__root.tsx", [
  route("/test", "home/home.tsx"),
]);
