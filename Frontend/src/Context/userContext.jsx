'use client';
import { useRouter } from "next/navigation";

const { createContext, useState, useContext } = require("react");

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const router = useRouter()

    const [currentuser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")))

    const [userLoggedIn, setUserLoggedIn] = useState(currentuser != null)

    const logout = () => {
        setCurrentUser(null)
        localStorage.removeItem("user")
        setUserLoggedIn(false)
        document.cookie = "token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        router.push("/login")
    }

    return (
        <userContext.Provider value={{
            currentuser, setCurrentUser, userLoggedIn, setUserLoggedIn, logout
        }} >
            {children}
        </userContext.Provider>
    )

}
const useUserContext = () => useContext(userContext)
export default useUserContext;
