// src/routes/dashboard.tsx
import { Outlet, NavLink } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div>
      <h1>📊 Dashboard Layout</h1>
      <nav>
        <NavLink to="." end>Home</NavLink>{" "}
        <NavLink to="settings">Settings</NavLink>{" "}
        <NavLink to="123">User:123</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
