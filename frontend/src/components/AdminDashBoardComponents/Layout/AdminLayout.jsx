// AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

function AdminLayout() {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <Header />
        <Outlet /> {/* Renders child routes */}
      </div>
    </div>
  );
}

export default AdminLayout;
