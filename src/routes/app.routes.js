import React from 'react'
import Dashboard from '../pages/dashboard'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

const AppRoutes = () => {
    return(
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name='Dashboard' component={Dashboard} />
        </AppStack.Navigator>
    )
}

export default AppRoutes