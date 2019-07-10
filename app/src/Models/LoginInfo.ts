import Employee from "./Employee";
import Admin from "./Admin";

export default interface LoginInfo {
  user?: Employee | Admin | null;
  isLoggedin?: boolean | null;
  loggedInAs?: string | null;
}
