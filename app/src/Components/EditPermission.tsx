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
import axios from "axios";
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
    var res = await axios.get(
      "https://evening-fortress-64572.herokuapp.com/allPermssion"
    );
    console.log(res);
    var data = await res.data;

    setAllPermission(data);
    var res2 = await axios.post(
      "https://evening-fortress-64572.herokuapp.com/getPermissionById",
      { id: props.employee.id }
    );
    var data2 = await res2.data;
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
      var res = await axios.post(
        "https://evening-fortress-64572.herokuapp.com/addPermissionById",
        {
          employeeId: props.employee.id,
          permissionId: item.id
        }
      );
      if (res.status === 200) {
        console.log(await res.data);
      }
    }
    if (e === false) {
      var res = await axios.post(
        "https://evening-fortress-64572.herokuapp.com/deletePermissionById",
        {
          employeeId: props.employee.id,
          permissionId: item.id
        }
      );
      if (res.status === 200) {
        console.log(await res.data);
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
