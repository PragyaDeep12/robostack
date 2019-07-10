import React, { useContext, useEffect } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import AssignResponsibilityForm from "./Components/AssignResponsibilityForm";
import AddEmployee from "./Components/AddEmployee";
import ViewResponsibility from "./Components/ViewResponsibility";
import ViewEmployeeList from "./Components/ViewEmployeeList";
import LoadingPage from "./Pages/LoadingPage";
import LoginContext from "./Contexts/LoginContext";
import LoginProvider from "./Contexts/LoginProvider";
import AdminPage from "./Pages/AdminPage";
import AddPermission from "./Components/AddPermission";
import CustomBootDialog from "./Components/CustomDialog";
import EmployeePage from "./Pages/EmployeePage";
import EmployeeResponsibility from "./Components/EmployeeResponsibility";
import ViewPermission from "./Components/ViewPermission";
function App() {
  return (
    <div className="App">
      <LoginProvider>
        <Router>
          <CustomBootDialog />
          <Route path="/" exact="true" component={LoginPage} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/employee" component={EmployeePage} />
          <Route
            path="/admin/assignResposibility"
            component={AssignResponsibilityForm}
          />
          <Route path="/admin/addEmployee" component={AddEmployee} />
          <Route path="/admin/addPermission" component={AddPermission} />

          <Route path="/admin/viewEmployeeList" component={ViewEmployeeList} />
          <Route
            path="/employee/viewResponsibility"
            component={EmployeeResponsibility}
          />
          <Route path="/employee/viewPermission" component={ViewPermission} />
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;

// function LoginWrapper(props) {
//   const {
//     state: { loginInfo },
//     actions: { setLoginDetails, justPrint }
//   } = useContext(LoginContext);
//   let isMounted = false;
//   useEffect(() => {
//     if (!isMounted) {
//       justPrint("hello");
//       isMounted = true;
//       if (localStorage.getItem("user")) {
//         var user = JSON.parse(localStorage.getItem("user"));
//         var loggedInAs = localStorage.getItem("loggedInAs");
//         setLoginDetails({
//           user: user,
//           isLoggedin: true,
//           loggedInAs: loggedInAs
//         });
//       } else {
//         console.log(loginInfo);
//         console.log(setLoginDetails);
//         setLoginDetails({ user: null, isLoggedin: false, loggedInAs: null });
//       }
//       // firebase.auth().onAuthStateChanged(
//       //   user => {
//       //     if (user) {
//       //       setLoginDetails({ isLoggedIn: true, uid: user.uid, user: null });
//       //     } else {
//       //       setLoginDetails({ isLoggedIn: false, uid: null, user: null });
//       //     }
//       //   },
//       //   error => {}
//       // );
//     }
//   }, []);
//   if (
//     loginInfo &&
//     loginInfo.loggedInAs != null &&
//     loginInfo.isLoggedin === true &&
//     loginInfo.user === null
//   ) {
//     console.log(loginInfo);
//     if (localStorage.getItem("user")) {
//       var user = localStorage.getItem("user").json();
//       var loggedInAs = localStorage.getItem("loggedInAs");
//       setLoginDetails({ user: user, isLoggedin: true, loggedInAs: loggedInAs });
//     } else {
//       setLoginDetails({ user: null, isLoggedin: false, loggedInAs: null });
//     }
//     // getUserDetails(loginInfo.uid);
//   }
//   console.log(loginInfo);
//   console.log(loginInfo.isLoggedin);
//   console.log(loginInfo.loggedInAs === "admin");
//   console.log(loginInfo.user != null);

//   if (
//     loginInfo &&
//     loginInfo.isLoggedin === true &&
//     loginInfo.loggedInAs === "admin" &&
//     loginInfo.user != null
//   ) {
//     console.log("here");
//     // return <AdminPage />;
//   } else if (
//     loginInfo &&
//     loginInfo.isLoggedin === true &&
//     loginInfo.loggedInAs === "employee" &&
//     loginInfo.user != null
//   ) {
//     // return <Redirect to="/employee" />;
//   } else {
//     console.log(loginInfo);
//     if (loginInfo.isLoggedin === false) {
//       // return <LoginPage />;
//     }
//     // return <LoadingPage />;
//   }
// }
// function PrivateRoute({ component: Component, ...rest }) {
//   const {
//     state: { loginInfo }
//   } = useContext(LoginContext);
//   return (
//     <Route
//       {...rest}
//       render={props => {
//         if (!loginInfo.isLoggedin) {
//           return <Redirect to="/login" />;
//         }
//         if (loginInfo.loggedInAs === "admin") {
//           console.log("private route");
//           return <Component {...props} />;
//         } else return <Redirect to="/employee" />;
//       }}
//     />
//   );
// }
