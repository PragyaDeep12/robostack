import React, { useEffect, useState } from "react";
import { Component } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Theme,
  makeStyles,
  createStyles,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import { closeDialog } from "./CustomDialog";
import PermissionModel from "../Models/PermissionModel";
import SwitchChecked from "./SwitchChecked";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: theme.palette.background.paper
    }
  })
);
export default function EditPermission(props) {
  const [permission, setPermission]: [Array<PermissionModel>, any] = useState(
    []
  );
  const [allPermission, setAllPermission] = useState([]);
  const callBackend = async () => {
    var res = await fetch("/allPermssion");
    console.log(res);
    var data = await res.json();

    setAllPermission(data);
    var res2 = await fetch("/getPermissionById", {
      method: "POST",
      body: JSON.stringify({ id: props.employee.id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    var data2 = await res2.json();
    console.log(data2);
    setPermission(data2);
  };
  const classes = useStyles();
  useEffect(() => {
    callBackend();
  }, []);
  const handleChange = async (e, item) => {
    console.log(props.employee.id);
    console.log(item.id);
    console.log(e);
    if (e === true) {
      var res = await fetch("/addPermissionById", {
        method: "POST",
        body: JSON.stringify({
          employeeId: props.employee.id,
          permissionId: item.id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status === 200) {
        console.log(await res.json());
      }
    }
    if (e === false) {
      var res = await fetch("/deletePermissionById", {
        method: "POST",
        body: JSON.stringify({
          employeeId: props.employee.id,
          permissionId: item.id
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.status === 200) {
        console.log(await res.json());
      }
    }
  };

  return (
    <div className="popup bg-light">
      <div className={classes.root}>
        {allPermission.map((item: PermissionModel, index) => {
          return (
            <div>
              <List
                aria-label="Secondary mailbox folders"
                style={{ width: "100%" }}
              >
                <ListItem button>
                  <ListItemText primary={item.permission} />
                  <SwitchChecked
                    permission={permission}
                    item={item}
                    handleChange={handleChange}
                  />
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          closeDialog();
        }}
      >
        Back
      </button>
    </div>
  );
}
