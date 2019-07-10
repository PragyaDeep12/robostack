import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip, Button, TextField } from "@material-ui/core";
import Responsibility from "../Models/Responsibility";
// import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: theme.palette.background.paper
    }
  })
);
export default function ViewResponsibility(props) {
  const [newRes, setNewRes] = useState("");
  const [responsibility, setResponsibility]: [
    Array<Responsibility>,
    any
  ] = useState([]);
  const callBackend = async () => {
    var res = await fetch("/getResponsibilityById", {
      method: "POST",
      body: JSON.stringify({ id: props.employee.id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    var data = await res.json();
    setResponsibility(data);
  };
  useEffect(() => {
    callBackend();
  }, []);
  const deleteResponsibility = async id => {
    var res = await fetch("/deleteResponsibilityById", {
      method: "POST",
      body: JSON.stringify({ employeeId: props.employee.id, id: id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    var data = await res.json();
    console.log(data);
    callBackend();
  };
  const addResponsibility = async e => {
    e.preventDefault();
    var res = await fetch("/addResponsibilityById", {
      method: "POST",
      body: JSON.stringify({
        employeeId: props.employee.id,
        responsibility: newRes
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    var data = await res.json();
    if (res.status === 200) {
      console.log("responsibility added");
      setNewRes("");
      callBackend();
    }
  };
  const classes = useStyles();
  return (
    <div className="popup bg-light">
      <div className={classes.root}>
        {responsibility.map((item, index) => {
          return (
            <div>
              <List
                aria-label="Secondary mailbox folders"
                style={{ width: "100%" }}
              >
                <ListItem button>
                  <ListItemText primary={item.responsibility} />
                  <Tooltip title="Delete" placement="bottom">
                    <Button
                      onClick={() => {
                        deleteResponsibility(item.id);
                      }}
                    >
                      <img className="icon delete-icon" />
                    </Button>
                  </Tooltip>
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
      <hr />
      <div>
        <form onSubmit={addResponsibility} className="form-inline">
          <TextField
            id="outlined-email-input"
            label="Name"
            value={newRes}
            // className={classes.textField}
            type="text"
            fullWidth
            name="roll"
            margin="normal"
            variant="outlined"
            onChange={e => {
              setNewRes(e.target.value);
            }}
          />
          <button className="btn btn-primary">Add </button>
        </form>
      </div>
    </div>
  );
}
