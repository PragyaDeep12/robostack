import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
export default function EmployeeComponent() {
  return (
    <div>
      <div className="jumbotron">
        <div className="">
          <div className="display-4"> Employee Dashboard</div>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Roles</div>
        <div className="card-body">
          <h5 className="card-title">My Roles</h5>
          <p className="card-text">
            Take a look at the Roles Provided to You By the Admin
          </p>
          <Link to="/employee/viewResponsibility" className="btn btn-primary">
            Go To Roles
          </Link>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Permissions</div>
        <div className="card-body">
          <h5 className="card-title">My Permissions</h5>
          <p className="card-text">
            Take a look at the Permissions Provided to You By the Admin
          </p>
          <Link to="/employee/viewResponsibility" className="btn btn-primary">
            Go To Permissions
          </Link>
        </div>
      </div>
    </div>
  );
}
