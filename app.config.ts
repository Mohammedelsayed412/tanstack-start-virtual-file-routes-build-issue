import { defineConfig } from "@tanstack/react-start/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// Optional: Import your virtual route config if needed
import { routes } from "./src/routes";

export default defineConfig({
  tsr: {
    appDirectory: "src",
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      // tailwindcss(),
      TanStackRouterVite({
        virtualRouteConfig: routes,
        routesDirectory: "./src/routes",
      }),
    ],
    // css: {
    // 	preprocessorOptions: {
    // 		scss: {
    // 			api: 'modern',
    // 		},
    // 	},
    // },
  },
});
