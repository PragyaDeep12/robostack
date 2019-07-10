import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import { TextField } from "@material-ui/core";

export default function AssignResponsibilityForm(props) {
  const [department, setDepartment] = useState();
  const [employee, setEmployee] = useState();
  const [role, setRole] = useState("");
  const departmentList = [
    "accounts",
    "manufacturing",
    "shipping",
    "qualityControl"
  ];
  const [employeeList, setEmployeeList] = useState([
    "Abhishek",
    "Aryan",
    "Arya"
  ]);
  return (
    <div className="basic-form">
      <div>
        <SelectComponent
          for={"Department"}
          list={departmentList}
          setValue={e => {
            setDepartment(e);
            console.log(e);
          }}
        />
      </div>
      <br />
      <div>
        <SelectComponent
          for={"Employee"}
          list={employeeList}
          setValue={e => {
            setEmployee(e);
            console.log(e);
          }}
        />
      </div>

      <TextField
        id="outlined-email-input"
        label="Role"
        // className={classes.textField}
        type="text"
        fullWidth
        name="roll"
        margin="normal"
        variant="outlined"
        onChange={e => {
          setRole(e.target.value);
        }}
      />
      <button className="btn btn-primary">Submit</button>
    </div>
  );
}
