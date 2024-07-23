import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest , verifyTokenRequest} from "../api/authUser";
import Cookies from "js-cookie";

export const authContext = createContext();



export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [registerErrors, setRegisterErrors] = useState([])
    const [loading, setLoading] = useState(true)


    const singUp = async (user) =>{
        try {
            const res = await registerRequest(user);
            setUser(res.payload)
            setIsAuthenticated(true);
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setRegisterErrors(error.response.data)
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
            if(Array.isArray(error.response.data)){
                return setRegisterErrors(error.response.data)
            }
            setRegisterErrors([error.response.data.message])
            
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



      useEffect(()=>{
        async function verifyToken(){
            const cookies = Cookies.get()
            if(!cookies.authCookie){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
            try {
                const res = await verifyTokenRequest() 
                if(!res.user){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.user);
                setLoading(false);

            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);

            }
        }
        verifyToken(); 
      },[])

      

   


    return (
        <authContext.Provider value={{singUp, singIn, user, isAuthenticated, loading, registerErrors}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuthContext = ()=>{
    const context = useContext(authContext)
    if(!context){
        throw new Error("useAuthContext must be used within an AuthProvider")
    }
    return context;
}