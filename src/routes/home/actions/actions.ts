import { createServerFn } from "@tanstack/react-start";

const testAction = createServerFn().handler(async () => {
  return "Hello World";
});
