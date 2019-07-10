import * as React from "react";
import { TextField } from "@material-ui/core";
export default function TextFieldComponent(props) {
  return (
    <TextField
      id="outlined-email-input"
      label="Email"
      // className={classes.textField}
      type={props.type}
      fullWidth
      margin="normal"
      variant="outlined"
      onChange={e => {
        props.setValue(e.target.value);
      }}
    />
  );
}
