import { useState, createContext, useContext} from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [userRole, setUserRole] = useState(null);

    const handleLogin = (userRole) => {
        setUserRole(userRole);
    }

    const handleLogout = () => {
        setUserRole(null);
    }

    return (
        <AuthContext.Provider value={{userRole, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
