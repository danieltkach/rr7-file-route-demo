// src/root.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject
} from "react-router-dom";

import routesPromise from "./routes";

async function bootstrap() {
  // 1. `routesPromise` is Promise<RouteConfigEntry[]>:
  const routeConfig = await routesPromise;

  // 2. At runtime, the Vite plugin/Typegen system transforms each entry
  //    into a RouteObject behind the scenes. We tell TS that “trust me”:
  const router = createBrowserRouter(routeConfig as unknown as RouteObject[]);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

bootstrap();
