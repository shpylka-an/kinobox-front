import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/currentUser";

const Dashboard = () => {
    const [currentUser] = useContext(CurrentUserContext)

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{currentUser.currentUser.email}</p>
        </div>
    )
}

export default Dashboard
