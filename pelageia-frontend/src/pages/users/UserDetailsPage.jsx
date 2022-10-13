import React from "react";
import UserDetailsWrapper from "../../components/users/details/UserDetailsWrapper";

const UserDetailsPage = ({match}) => {
    return(
        <UserDetailsWrapper match={match}/>
    )
}

export default UserDetailsPage;