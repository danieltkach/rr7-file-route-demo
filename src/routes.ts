// src/routes.ts
import type { RouteConfig } from "@react-router/dev/routes";
import { route, index, layout } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

/**
 * We combine:
 *  1. Explicit route()/index()/layout() calls (for any non-filesystem routes or special ordering)
 *  2. ...await flatRoutes({ rootDirectory: "src/routes" }) to pick up all files in src/routes/.
 *
 * The result must satisfy `RouteConfig`, which is `Array<RouteConfigEntry> | Promise<Array<RouteConfigEntry>>`.
 */
export default [
  // Example: an explicit “about” route:
  route("about", "./routes/about.tsx"),

  // Example: a “dashboard” layout that wraps some children (if needed):
  layout("./routes/dashboard.tsx", [
    index("./routes/dashboard._index.tsx"),
    route("settings", "./routes/dashboard.settings.tsx"),
    route(":userId", "./routes/dashboard.$userId.tsx"),
  ]),

  // Now spread all file-based routes under src/routes/:
  ...(await flatRoutes({
    rootDirectory: "src/routes",
  })),

  // Optionally, a pathless auth folder that yields /login and /register:
  layout("./routes/_auth.tsx", [
    route("login", "./routes/_auth/login.tsx"),
    route("register", "./routes/_auth/register.tsx"),
  ]),
] satisfies RouteConfig;
