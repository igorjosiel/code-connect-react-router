import { useState } from "react";
import UserContext from "./UserContext";

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});

    const updateCurrentUser = (data) => {
        setCurrentUser({
            id: data?.id,
            name: data?.name,
            username: data?.username,
            email: data?.email,
            avatar: data?.avatar,
        });
    }

    return (
        <UserContext value={{
            currentUser,
            updateCurrentUser,
        }}>
            {children}
        </UserContext>
    );
}

export default UserProvider;
