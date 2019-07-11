import * as React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import AdminComponent from "../Components/AdminComponent";
export default function AdminPage() {
  return (
    <div>
      <AdminNavbar />
      {/* {match ? console.log(match.params.function) : ""}
      {match ? (
        match.params.function === "addEmployee" ? (
          <AddEmployee />
        ) : (
          <ViewEmployeeList />
        )
      ) : (
        <ViewEmployeeList />
      )} */}
      {window.location.href.endsWith("/admin") ? <AdminComponent /> : ""}
    </div>
  );
}
