import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  return (
    <div>
      <nav
        className=" navbar navbar-expand-lg navbar-dark bg-dark justify-content-between"
        style={{
          width: "100%",
          zIndex: 7,

          opacity: 1
        }}
      >
        <div className="" id="navbarSupportedContent">
          <ul className=" navbar-nav mr-auto ">
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/addEmployee"}>
                Add Employee
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to={"/admin/viewEmployeeList"}>
                View Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin/addPermission"}>
                Add Permission
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
