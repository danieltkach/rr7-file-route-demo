// src/root.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes";

async function bootstrap() {
  // `routes` is a Promise<RouteConfigEntry[]>, which createBrowserRouter can accept
  // Convert RouteConfigEntry[] to RouteObject[] by mapping 'index: true' to the correct type
  function mapRouteConfigToRouteObject(route: any): any {
    if (route.index === true) {
      // Remove 'path' and set 'index: true' for index routes
      const { path, children, ...rest } = route;
      return {
        ...rest,
        index: true,
        ...(children ? { children: children.map(mapRouteConfigToRouteObject) } : {})
      };
    }
    // For non-index routes, omit 'index' property
    const { index, children, ...rest } = route;
    return {
      ...rest,
      path: route.path,
      ...(children ? { children: children.map(mapRouteConfigToRouteObject) } : {})
    };
  }
  const routeObjects = (await routes).map(mapRouteConfigToRouteObject);
  const router = createBrowserRouter(routeObjects);

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

bootstrap();
