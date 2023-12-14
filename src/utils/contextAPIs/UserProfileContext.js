import { createContext } from "react";

const UserProfileContext = createContext({
    loggedInUser: "Default User",
});

export default UserProfileContext;