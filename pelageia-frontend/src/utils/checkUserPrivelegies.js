import jwtDecode from "jwt-decode";
import { roles } from "./consts";

export const checkUserPrivilegies = () => {
    if (!localStorage.getItem("token")) return "0";
    return Object.keys(roles).find(key => roles[key] === Object.values(jwtDecode(localStorage.getItem("token")))[2]);
}