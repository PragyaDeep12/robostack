import React, { useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Tooltip, Button } from "@material-ui/core";
import Employee from "../Models/Employee";
import AdminNavbar from "./AdminNavbar";
import { openModal } from "./CustomDialog";
import UpdateEmployee from "./UpdateEmployee";
import EditPermission from "./EditPermission";
import ViewResponsibility from "./ViewResponsibility";
// import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: theme.palette.background.paper
    }
  })
);
export default function ViewEmployeeList() {
  const [employeeList, setEmployeeList]: [Array<Employee>, any] = useState([]);
  const getEmployeeList = async () => {
    var rows = await fetch("/allEmployees");
    console.log(rows);
    var data = await rows.json();
    console.log("here");
    console.log(data);
    setEmployeeList(data);
  };
  const deleteEmployee = async id => {
    await fetch("/deleteEmployee", {
      method: "POST",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    getEmployeeList();
  };
  useEffect(() => {
    getEmployeeList();
  }, []);
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        {employeeList.map((employee, index) => {
          return (
            <div>
              <List
                aria-label="Secondary mailbox folders"
                style={{ width: "100%" }}
              >
                <ListItem button>
                  <div className="col">{employee.name}</div>
                  <div className="col">{employee.department}</div>
                  <div className="float-right">
                    <Tooltip title="Edit Roles" placement="bottom">
                      <Button
                        onClick={() => {
                          openModal(<ViewResponsibility employee={employee} />);
                        }}
                      >
                        <img className="icon user-icon" />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Edit Employee" placement="bottom">
                      <Button
                        onClick={() => {
                          openModal(<UpdateEmployee employee={employee} />);
                        }}
                      >
                        <img className="icon edit-icon" />
                      </Button>
                    </Tooltip>{" "}
                    <Tooltip title="Edit Permission" placement="bottom">
                      <Button
                        onClick={() => {
                          openModal(<EditPermission employee={employee} />);
                        }}
                      >
                        <img className="icon permission-icon" />
                      </Button>
                    </Tooltip>{" "}
                    <Tooltip title="Delete" placement="bottom">
                      <Button
                        onClick={() => {
                          deleteEmployee(employee.id);
                        }}
                      >
                        <img className="icon delete-icon" />
                      </Button>
                    </Tooltip>
                  </div>
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
}
