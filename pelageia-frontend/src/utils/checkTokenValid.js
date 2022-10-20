import jwtDecode from "jwt-decode";

export const getTokenExpiration = (token) => {
    if (!token) {
        return null
    }
   return jwtDecode(token).exp
}

export const isExpired = (exp) => {
    if (!exp) {
        return true;
    }
    // console.log(`Token exp date: ${exp} Now date: ${Math.floor(Date.now() / 1000)}`);
    return Math.floor(Date.now() / 1000) > exp;
}