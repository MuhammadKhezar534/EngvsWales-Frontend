import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("XAUTH")) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={{ marginBottom: "80px" }}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "50px" }}>
        <h1>Welcome DGA Admin</h1>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <Outlet />
      <div className="text-right" style={{ marginTop: "30%" }}>
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminLayout;
