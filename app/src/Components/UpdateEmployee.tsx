import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import { TextField } from "@material-ui/core";
import { closeDialog } from "./CustomDialog";

export default function UpdateEmployee(props) {
  const [department, setDepartment] = useState(props.employee.department);
  const [employee, setEmployee] = useState(props.employee.name);

  const [id, setId] = useState(props.employee.id);
  const departmentList = [
    "accounts",
    "manufacturing",
    "shipping",
    "qualityControl"
  ];
  //   const [employeeList, setEmployeeList] = useState([
  //     "Abhishek",
  //     "Aryan",
  //     "Arya"
  //   ]);
  const submitForm = async e => {
    e.preventDefault();
    console.log("here");
    if (employee && department) {
      await fetch("/updateEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: id, name: employee, department: department })
      }).then(res => {
        if (res.status == 200) {
          console.log("employee added ");
          closeDialog();
        } else {
          console.log(res);
        }
      });
    } else {
      console.log("one or more values are missing");
    }
  };
  return (
    <form onSubmit={submitForm}>
      <div className="popup bg-light">
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

        <div>
          <TextField
            id="outlined-email-input"
            label="Name"
            // className={classes.textField}
            type="text"
            value={employee}
            fullWidth
            name="roll"
            margin="normal"
            variant="outlined"
            onChange={e => {
              setEmployee(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email (non-updateable)"
            // className={classes.textField}
            type="text"
            value={props.employee.email}
            fullWidth
            name="roll"
            margin="normal"
            variant="outlined"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
