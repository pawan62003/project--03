import { createContext, useState } from "react";


export const AuthContext = createContext()
const AuthContextProvider = ({children}) => {

    const [isAuth,setIsAuth] = useState(true);

const Login = () => {
    setIsAuth(true);
}

const Logout = () => {
    setIsAuth(false);
}

    return <AuthContext.Provider value={{isAuth,Login,Logout}}>
       {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;