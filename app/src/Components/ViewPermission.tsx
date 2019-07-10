import React, { useState, useEffect, useContext } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip, Button, TextField } from "@material-ui/core";
import Responsibility from "../Models/Responsibility";
import LoginContext from "../Contexts/LoginContext";
import Employee from "../Models/Employee";
import PermissionModel from "../Models/PermissionModel";
// import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: theme.palette.background.paper
    }
  })
);
export default function ViewPermission(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  //   const [newRes, setNewRes] = useState("");
  const [permission, setPermission]: [Array<PermissionModel>, any] = useState(
    []
  );
  const callBackend = async () => {
    var user = localStorage.getItem("user");
    if (user) {
      var userDetails: Employee = JSON.parse(user);
      console.log(user);
      if (userDetails && userDetails.id) {
        var res = await fetch("/getResponsibilityByEmpId", {
          method: "POST",
          body: JSON.stringify({ id: userDetails.id }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        var data = await res.json();
        console.log(data);
        setPermission(data);
      }
    }
  };
  useEffect(() => {
    callBackend();
  }, []);
  //   const deleteResponsibility = async id => {
  //     var res = await fetch("/deleteResponsibilityById", {
  //       method: "POST",
  //       body: JSON.stringify({ employeeId: props.employee.id, id: id }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     var data = await res.json();
  //     console.log(data);
  //     callBackend();
  //   };
  //   const addResponsibility = async e => {
  //     e.preventDefault();
  //     var res = await fetch("/addResponsibilityById", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         employeeId: props.employee.id,
  //         responsibility: newRes
  //       }),
  //       headers: {
  //         "Content-Type": "application/json"
  //       }
  //     });
  //     var data = await res.json();
  //     if (res.status === 200) {
  //       console.log("responsibility added");
  //       setNewRes("");
  //       callBackend();
  //     }
  //   };
  const classes = useStyles();
  return (
    <div className="">
      <div className={classes.root}>
        {permission.map((item, index) => {
          return (
            <div>
              <List
                aria-label="Secondary mailbox folders"
                style={{ width: "100%" }}
              >
                <ListItem button>
                  <ListItemText primary={item.permission} />
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
}
