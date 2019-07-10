import * as React from "react";
import AdminNavbar from "../Components/AdminNavbar";
import ViewEmployeeList from "../Components/ViewEmployeeList";
import AddEmployee from "../Components/AddEmployee";
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
      this is admin page
    </div>
  );
}
