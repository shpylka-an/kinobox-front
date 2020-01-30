import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUser";

const Profile = () => {
    const [currentUser] = useContext(CurrentUserContext)

    return (
        <div>
            <h1>Profile</h1>
            <p>Welcome back {currentUser.currentUser ? currentUser.currentUser.email : ''}</p>
        </div>
    )
}

export default Profile
