import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
interface EmployeeCount {
  department?: string | null;
  count?: number | null;
}
export default function AdminComponent() {
  const [employeeCount, setEmployeeCount]: [
    Array<EmployeeCount>,
    any
  ] = React.useState([]);
  const callBackend = async () => {
    var res = await axios.get(
      "https://evening-fortress-64572.herokuapp.com/employeeCount"
    );
    var data = await res.data;
    if (data.length > 0) {
      setEmployeeCount(data);
    }
  };
  React.useEffect(() => {
    callBackend();
  }, []);
  return (
    <div className="">
      <div>
        <div className="jumbotron">
          <div className="">
            <div className="display-4"> Admin Dashboard</div>
          </div>
        </div>
        <div className="row card-group">
          {employeeCount.map((item, index) => {
            return (
              <div className=" col-sm-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.department ? item.department.toUpperCase() : ""}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Employees In this Department
                    </h6>
                    <p className="card-text">
                      {item.count} employees are present in this department
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Employees</div>
              <div className="card-body">
                <h5 className="card-title">Add Employees</h5>
                <p className="card-text">Click here to add more Employees</p>
                <Link className="btn btn-primary" to={"/admin/addEmployee"}>
                  Add Employee
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Permissions</div>
              <div className="card-body">
                <h5 className="card-title">Add Permissions</h5>
                <p className="card-text">Click here to add more Permissions</p>
                <Link to="/admin/addPermission" className="btn btn-primary">
                  Add Permissions
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header">Employees</div>
              <div className="card-body">
                <h5 className="card-title">View Employees</h5>
                <p className="card-text">
                  Click here to view all employees and the permission and roles
                  assigned to them
                </p>
                <Link to="/admin/viewEmployeeList" className="btn btn-primary">
                  View Employees
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}
