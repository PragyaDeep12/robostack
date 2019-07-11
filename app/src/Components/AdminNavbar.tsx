import * as React from "react";
import { Component } from "react";
import LoginContext from "../Contexts/LoginContext";
import { Link } from "react-router-dom";
export default function AdminNavbar() {
  const {
    state: { loginInfo },
    actions: { setLoginDetails }
  }: any = React.useContext(LoginContext);
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
              <Link className="nav-link" to={"/admin"}>
                Dashboard
              </Link>
            </li>
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
        <div className="float-right">
          <button
            className="btn btn-secondary"
            onClick={() => {
              localStorage.removeItem("user");
              localStorage.removeItem("loggedInAs");
              setLoginDetails({
                user: null,
                isLoggedin: false,
                loggedInAs: null
              });
            }}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
}
