import React from "react";
import LoginInfo from "../Models/LoginInfo";
export default React.createContext({
  state: {
    loginInfo: {
      user: null,
      isLoggedin: null,
      idToken: null
    } as LoginInfo
  },
  actions: {}
});
