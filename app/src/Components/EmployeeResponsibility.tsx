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
import axios from "axios";
// import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",

      backgroundColor: theme.palette.background.paper
    }
  })
);
export default function EmployeeResponsibility(props) {
  const {
    state: { loginInfo }
  } = useContext(LoginContext);
  //   const [newRes, setNewRes] = useState("");
  const [responsibility, setResponsibility]: [
    Array<Responsibility>,
    any
  ] = useState([]);
  const callBackend = async () => {
    var user = localStorage.getItem("user");
    if (user) {
      var userDetails: Employee = JSON.parse(user);
      console.log(user);
      if (userDetails && userDetails.id) {
        var res = await axios.post(
          "https://evening-fortress-64572.herokuapp.com/getResponsibilityById",
          { id: userDetails.id }
        );
        var data = await res.data;
        setResponsibility(data);
      }
    }
  };
  useEffect(() => {
    callBackend();
  }, []);

  const classes = useStyles();
  return (
    <div className="">
      <div className="jumbotron">
        <div className="">
          <div className="card-title h2">My Responsibilities</div>
        </div>
      </div>
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
                </ListItem>
              </List>
            </div>
          );
        })}
      </div>
    </div>
  );
}
