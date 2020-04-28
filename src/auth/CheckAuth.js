import { AsyncStorage } from 'react-native';
var Decode = require('jwt-decode')

async function CheckAuth(){
    const token = await AsyncStorage.getItem('x-token')
    const tokenRefresh = await AsyncStorage.getItem('x-token-refresh')

    if (!token || !tokenRefresh)
        return false

    try {
        const { exp } = Decode(tokenRefresh)
        if ((Math.floor(exp * 1000)) < new Date().getTime())
            return false
    } catch (error) {
        return false
    }

    return true
}

export default CheckAuth