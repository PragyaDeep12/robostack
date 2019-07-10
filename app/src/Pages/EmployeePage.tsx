import * as React from "react";
import { Component } from "react";
import EmployeeNavbar from "../Components/EmployeeNavbar";
import EmployeeComponent from "../Components/EmployeeComponent";
export default function EmployeePage() {
  return (
    <div>
      <EmployeeNavbar />
      {window.location.href.endsWith("/employee") ? <EmployeeComponent /> : ""}
    </div>
  );
}
