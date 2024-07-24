import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";

export function PageLayout() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12,1fr)",
        gap: "1rem",
      }}
    >
      <div style={{ gridColumn: "1/11" }}>
        <Outlet />
      </div>
      <div style={{ gridColumn: "11/13" }}>
        <Sidebar />
      </div>
    </div>
  );
}
