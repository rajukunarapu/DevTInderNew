import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import AuthContext from './AuthContext'


const AuthProvider = ({children}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(null);

    const authCheck = async()=>{
        try{
            const res = await Axios.get(`${import.meta.env.VITE_SERVER_URL}/auth/isAuthenticated`,{
                "headers":{
                    "Content-Type":"application/json"
                },
                withCredentials: true
            });
            setIsAuthenticated(res.data.isAuthenticated)
        }catch(error){
            if(error.response?.status === 401){
                setIsAuthenticated(false)
                console.warn("User not Authenticated");
            }else{
                console.error("Unexpected error : ",error)
            }
        }
    }

    useEffect(()=>{
            authCheck()
    },[])

  return (
    <>
        <AuthContext.Provider value={{isAuthenticated,authCheck}} >
            {children}
        </AuthContext.Provider>
    </>
  )
}

export default AuthProvider
