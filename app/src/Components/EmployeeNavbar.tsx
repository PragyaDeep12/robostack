import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
export default function EmployeeNavbar() {
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
              <Link className="nav-link" to={"/employee/viewResponsibility"}>
                Roles
              </Link>
            </li>

            <li className="nav-item ">
              <Link className="nav-link" to={"/employee/viewPermission"}>
                Permission
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
