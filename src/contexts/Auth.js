import React , { createContext, useEffect, useState } from 'react'
import CheckAuth from '../auth/CheckAuth'
import * as auth from '../auth/auth'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        async function loadAuth(){
            setAuth(await CheckAuth())
        }
        loadAuth()
    },[])

    const SignIn = async data =>{
        const res = await auth.SignIn(data)
        setAuth(res)
    }

    return (
        <AuthContext.Provider value={{isAuth, SignIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext