import * as React from "react";
import { Component } from "react";
import { TextField } from "@material-ui/core";
export default function AddPermission() {
  const [permission, setPermission] = React.useState();
  const submitForm = async e => {
    e.preventDefault();
    var res = await fetch("/addPermission", {
      method: "POST",
      body: JSON.stringify({ permission: permission }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status === 200) {
      console.log("permisson added");
    }
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div className="App basic-form">
          <h3>Add New Permission</h3>
          <div>
            <TextField
              id="outlined-email-input"
              label="Permission"
              // className={classes.textField}
              type="text"
              fullWidth
              name="permission"
              margin="normal"
              variant="outlined"
              onChange={e => {
                setPermission(e.target.value);
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
    </div>
  );
}
