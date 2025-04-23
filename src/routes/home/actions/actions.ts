import { createServerFn } from "@tanstack/react-start";

export const testAction = createServerFn().handler(async () => {
  console.log("testAction");
});
