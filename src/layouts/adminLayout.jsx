import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("XAUTH")) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <h1>Welcome DGA Admin</h1>
      <div className="text-right mb-12">
        <button
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
