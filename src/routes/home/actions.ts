import { createServerFn } from "@tanstack/react-start";

export const homeServerFn = createServerFn().handler(async () => {
  console.log("homeServerFn");
});
