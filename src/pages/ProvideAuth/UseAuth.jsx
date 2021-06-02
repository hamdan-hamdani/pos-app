import { useContext } from "react";
import { authContext } from "./AuthContext";

function UseAuth() {
  return useContext(authContext);
}

export default UseAuth;
