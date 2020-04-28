import React from 'react'
import Login from '../pages/login'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes = () => {
    return(
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name='Login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes