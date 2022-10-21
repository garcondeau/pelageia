import jwtDecode from "jwt-decode";

export const getMe = () => {
  if (!localStorage.getItem("token")) {
    return null;
  }
  return {
    id: Object.values(jwtDecode(localStorage.getItem("token")))[0],
    name: Object.values(jwtDecode(localStorage.getItem("token")))[1],
    role: Object.values(jwtDecode(localStorage.getItem("token")))[2],
    email: Object.values(jwtDecode(localStorage.getItem("token")))[3],
    phone: Object.values(jwtDecode(localStorage.getItem("token")))[4],
  };
};
