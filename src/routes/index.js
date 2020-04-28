import React, { useContext } from 'react'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'
import AuthContext from '../contexts/Auth'

const Routes = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        isAuth ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes