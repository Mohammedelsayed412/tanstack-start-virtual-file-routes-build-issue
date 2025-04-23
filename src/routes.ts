import { index, layout, rootRoute, route } from "@tanstack/virtual-file-routes";
export const routes = rootRoute("__root.tsx", [
  layout("NavigationLayout.tsx", [
    index("home/home.tsx"),
    route("/about", "about/about.tsx"),
  ]),
]);
