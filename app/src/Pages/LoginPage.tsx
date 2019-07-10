import React, { useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import AdminLoginComponent from "../Components/AdminLoginComponent";
export default function LoginPage() {
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <div>
      {isAdmin ? (
        <AdminLoginComponent
          setEmployeeLogin={() => {
            setIsAdmin(false);
          }}
        />
      ) : (
        <LoginComponent
          setAdminLogin={() => {
            setIsAdmin(true);
          }}
        />
      )}
    </div>
  );
}
