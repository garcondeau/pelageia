import jwt_decode from "jwt-decode";

const getUserInfo = () => {
  let token = null;

  if (localStorage.getItem("Bearer") !== "") {
    token = jwt_decode(localStorage.getItem("Bearer"));
    console.log(token);
  }
  return null;
};

export default getUserInfo;
