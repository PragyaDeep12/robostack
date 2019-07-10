import React, { useState, useContext } from "react";
import { TextField } from "@material-ui/core";
import LoginContext from "../Contexts/LoginContext";
export default function AdminLoginComponent(props) {
  const {
    state: { loginInfo },
    actions: { loginAsAdmin, justPrint }
  }: any = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="basic-form">
      <div>
        <TextField
          id="outlined-email-input"
          label="Email"
          // className={classes.textField}
          type="email"
          fullWidth
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          fullWidth
          // className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="btn btn-primary"
          onClick={async () => {
            console.log("email:" + email);
            console.log("password: " + password);
            justPrint();
            await loginAsAdmin(email, password);
          }}
        >
          Login
        </button>
      </div>
      <br />
      <div>
        <button
          className="btn btn-link"
          onClick={() => {
            props.setEmployeeLogin();
          }}
        >
          Login As Employee
        </button>
      </div>
    </div>
  );
}
