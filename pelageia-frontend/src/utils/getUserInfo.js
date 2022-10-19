import jwt_decode from "jwt-decode";

const getUserInfo = () => {
  let token = "";

  if (localStorage.getItem("Bearer")) {
    token = jwt_decode(localStorage.getItem("Bearer"));
    return Object.values(token);
  }
};

export default getUserInfo;
