import { getTokenExpiration, isExpired } from "./checkTokenValid";
import { initLogout } from "./logoutEvent";

const getAuthConfig = () => {
    if (localStorage.getItem("token") !== null) {

        if(isExpired(getTokenExpiration(localStorage.getItem("token")))) {
            initLogout();
            return;
        }

        return {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }
    }
}

export default getAuthConfig;