import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContextProvider"

const PrivateRoute = ({children}) => {

    let {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to='/login' />
    }

    return children
}

export default PrivateRoute;