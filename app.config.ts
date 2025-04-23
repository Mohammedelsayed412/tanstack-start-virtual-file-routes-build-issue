import { defineConfig } from "@tanstack/react-start/config";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

// Optional: Import your virtual route config if needed
import { routes } from "./src/routes";

export default defineConfig({
  tsr: {
    appDirectory: "src",
    virtualRouteConfig: routes,
    routesDirectory: "./src/routes",
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      // tailwindcss(),
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
