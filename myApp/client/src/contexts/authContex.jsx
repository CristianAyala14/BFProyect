import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest , verifyTokenRequest} from "../api/authUser";
import Cookies from "js-cookie";

export const authContext = createContext();

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [registerErrors, setRegisterErrors] = useState("")
    const [loading, setLoading] = useState(true)


    const singUp = async (user) =>{
        try {
            const res = await registerRequest(user);
            if(res.status===200){
                setUser(res.user)
                setIsAuthenticated(true);
                setRegisterErrors("");
            }
            if(res.status===400){
                setRegisterErrors(res.data)
                setUser({})
                setIsAuthenticated(false);
            }
        } catch (error) {
            setRegisterErrors("Network or other error.")
            console.error("Network or other error:", error);
        }
    }

    const singIn = async (user) =>{
        try {
            const res = await loginRequest(user);
            if(res.status===200){
                setUser(res.user)
                setIsAuthenticated(true);
                setRegisterErrors("");
                
            }
            if(res.status===400){
                setRegisterErrors(res.data)
                setUser({})
                setIsAuthenticated(false);
            }

        } catch (error) {
            setRegisterErrors("Network or other error.")
            console.error("Network or other error:", error); 
        }
    }
    
    
    const logOut = async (user) =>{
        try {
            Cookies.remove("authCookie");
            setIsAuthenticated(false);
            setUser({});
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(registerErrors){
            const timer = setTimeout(()=>{
                setRegisterErrors("")
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
                if(!res.data.user){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data.user);
                setLoading(false);

            } catch (error) {
                setIsAuthenticated(false);
                setUser({});
                setLoading(false);

            }
        }
        verifyToken(); 
    },[])

      
    return (
        <authContext.Provider value={{singUp, singIn, user, isAuthenticated, loading, logOut, registerErrors}}>
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