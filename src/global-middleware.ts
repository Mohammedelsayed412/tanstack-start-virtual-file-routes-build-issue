import {
  createMiddleware,
  registerGlobalMiddleware,
} from "@tanstack/react-start";

const globalMiddleware1 = createMiddleware().server(async ({ next }) => {
  console.log("globalMiddleware1");
  return next();
});

const globalMiddleware2 = createMiddleware().server(async ({ next }) => {
  console.log("globalMiddleware2");
  return next();
});

registerGlobalMiddleware({
  middleware: [globalMiddleware1, globalMiddleware2],
});

const a = createMiddleware().server(async ({ next }) => {
  console.log("a");
  return next();
});

const b = createMiddleware()
  .middleware([a])
  .server(async ({ next }) => {
    console.log("b");
    return next();
  });
