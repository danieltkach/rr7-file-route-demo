// src/root.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";

import routesPromise from "./routes";

async function bootstrap() {
  // routesPromise resolves to a valid RouteConfigEntry[] (satisfies RouteConfig):
  const routeConfig = await routesPromise;

  // The Vite plugin transforms these entries into RouteObject[] at runtime:
  const router = createBrowserRouter(routeConfig as unknown as RouteObject[]);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

bootstrap();
