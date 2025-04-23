import { createServerFn } from "@tanstack/react-start";

export const aboutServerFn = createServerFn().handler(async () => {
  console.log("aboutServerFn called");
});
