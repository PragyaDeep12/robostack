import React, { useState } from "react";
import LoginInfo from "../Models/LoginInfo";
import LoginContext from "./LoginContext";
export default function LoginProvider(props) {
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    user: null,
    isLoggedin: null,
    loggedInAs: null
  });
  const loginAsAdmin = async (email, password) => {
    console.log("login");
    if (email === "admin" && password === "admin") {
      localStorage.setItem("user", JSON.stringify({ user: { name: "admin" } }));
      localStorage.setItem("loggedInAs", "admin");
      setLoginDetails({
        user: { name: "admin" },
        isLoggedin: true,
        loggedInAs: "admin"
      });
    } else {
      setLoginDetails({ user: null, isLoggedin: false, loggedInAs: null });
    }
  };
  const loginAsEmployee = async email => {
    console.log(email);
    await fetch("/loginEmployee", {
      method: "post",
      body: JSON.stringify({ email: email }),
      headers: {
        "Content-type": "application/json"
      }
    }).then(async res => {
      var data = await res.json();
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data[0]));
      localStorage.setItem("loggedInAs", "employee");
      if (data.loginSuccessful) {
        setLoginDetails({
          user: {
            id: data.id,
            email: email,
            name: data.name,
            department: data.department
          },
          isLoggedin: true,
          loggedInAs: "employeee"
        });
      } else {
        setLoginDetails({ user: null, isLoggedin: false, loggedInAs: null });
      }
    });
  };
  const justPrint = async balue => {
    console.log(balue);
  };
  const setLoginDetails = async (loginInfo: LoginInfo) => {
    console.log("reaching here");
    setLoginInfo(loginInfo);
  };
  return (
    <LoginContext.Provider
      value={{
        state: { loginInfo },
        actions: {
          loginAsAdmin,
          loginAsEmployee,
          setLoginDetails,
          justPrint
        }
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
}
