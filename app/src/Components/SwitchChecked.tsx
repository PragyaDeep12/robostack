import React, { useState, useEffect } from "react";
import { Component } from "react";
import { Switch } from "@material-ui/core";
export default function SwitchChecked(props) {
  const [checked, setChecked] = useState(false);
  const { permission } = props;
  const { item } = props;
  const callBack = async () => {
    var res = await permission.filter(element => {
      console.log(element.permissionId);
      return element.permissionId === item.id;
    });

    if (res.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  useEffect(() => {
    console.log(permission.length);
    console.log(item);
    if (permission.length > 0) {
      console.log("here");
      callBack();
    } else {
      setChecked(false);
    }
  }, [props.permission.length]);

  return (
    <Switch
      checked={checked}
      onChange={() => {
        setChecked(!checked);
        props.handleChange(!checked, item);
      }}
      // value="checkedB"
      color="primary"
    />
  );
}
