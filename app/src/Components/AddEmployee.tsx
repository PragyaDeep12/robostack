import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import { TextField } from "@material-ui/core";

export default function AddEmployee(props) {
  const [department, setDepartment] = useState();
  const [employee, setEmployee] = useState();
  const [email, setEmail] = useState();
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
    if (employee && department) {
      await fetch("/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: employee,
          department: department,
          email: email
        })
      }).then(res => {
        if (res.status == 200) {
          console.log("employee added ");
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

        <div>
          <TextField
            id="outlined-email-input"
            label="Name"
            // className={classes.textField}
            type="text"
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
            label="Email"
            // className={classes.textField}
            type="email"
            fullWidth
            name="roll"
            margin="normal"
            variant="outlined"
            onChange={e => {
              setEmail(e.target.value);
            }}
          />
        </div>

        {/* <TextField
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
      /> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}
