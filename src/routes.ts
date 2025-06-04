import type { RouteConfig } from "@react-router/dev/routes";
import {
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default (async (): Promise<RouteConfig> => {
  return [
    // 1. Index route at `/`
    index("./routes/_index.tsx"),

    // 2. `/about`
    route("about", "./routes/about.tsx"),

    // 3. Dashboard layout at `/dashboard`
    layout("./routes/dashboard.tsx", [
      index("./routes/dashboard._index.tsx"),           // "/dashboard"
      route("settings", "./routes/dashboard.settings.tsx"), // "/dashboard/settings"
      route(":userId", "./routes/dashboard.$userId.tsx"),   // "/dashboard/:userId"
    ]),

    // 4. Spread any additional FS-based routes
    ...(await flatRoutes({ rootDirectory: "src/routes" })),

    // 5. Auth pathless layout => `/login`, `/register`
    layout("./routes/_auth.tsx", [
      route("login", "./routes/_auth/login.tsx"),       // "/login"
      route("register", "./routes/_auth/register.tsx"), // "/register"
    ]),
  ] satisfies RouteConfig;
})();
