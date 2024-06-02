import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/authUser";


export const authContext = createContext();

export const useAuthContext = ()=>{
    const context = useContext(authContext)
    if(!context){
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context;
}

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [registerErrors, setRegisterErrors] = useState([])

    const singUp = async (user) =>{
        try {
            const res = await registerRequest(user);
            setUser(res.payload)
            setIsAuthenticated(true);
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setRegisterErrors(error.response.data.message)
            }
            setRegisterErrors([error.response.data.message])

        }
    }

    const singIn = async (user) =>{
        try {
            const res = await loginRequest(user);
            setUser(res.payload)
            setIsAuthenticated(true);
        } catch (error) {
            setRegisterErrors(error.response.data)
            console.error('Could not connect to the server:', error.response.data);
        }
    }

    useEffect(()=>{
        if(registerErrors.length>0){
            const timer = setTimeout(()=>{
                setRegisterErrors([])
            },3000)
            return ()=> clearTimeout(timer)
        }
      },[registerErrors])


    return (
        <authContext.Provider value={{singUp, singIn, user, isAuthenticated, registerErrors}}>
            {children}
        </authContext.Provider>
    )
}

