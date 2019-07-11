import React, { useState, useContext } from "react";
import { TextField } from "@material-ui/core";
import LoginContext from "../Contexts/LoginContext";
export default function LoginComponent(props) {
  const {
    state: { loginInfo },
    actions: { loginAsEmployee }
  }: any = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="App basic-form">
      <h3>Login As Employee</h3>
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
        <button
          className="btn btn-primary"
          onClick={async () => {
            console.log("email:" + email);
            loginAsEmployee(email);
          }}
        >
          Login
        </button>
      </div>
      <br />
      <div>
        <button
          className="btn btn-link"
          onClick={async () => {
            props.setAdminLogin();
          }}
        >
          AdminLogin
        </button>
      </div>
    </div>
  );
}
