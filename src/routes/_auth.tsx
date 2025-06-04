// src/routes/_auth.tsx
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h1>🔒 Auth Layout</h1>
      <Outlet />
    </div>
  );
}
