import api from './api'
import { useContext } from 'react'
import { AsyncStorage } from 'react-native';
import { ErrorContext } from '../errors/ErrorContext'
import { AuthContext } from '../contexts/AuthContext'

const setHeaders = (token, tokenRefresh) => {
    if (!token || !tokenRefresh)
        return null

    return { headers: { 'x-token': token, 'x-token-refresh': tokenRefresh } }
}

const useFetch = () => {
    const { setErrors } = useContext(ErrorContext)
    const { setAuth } = useContext(AuthContext)

    return [async (type, path, data) => {
        const token = await AsyncStorage.getItem('x-token')
        const tokenRefresh = await AsyncStorage.getItem('x-token-refresh')
        const headers = setHeaders(token, tokenRefresh)
        try {
            setErrors(null)
            const callApi = async () => {
                switch (type) {
                    case 'get':
                        return await api.get(path, (data ? data : headers), (data ? headers : null))
                    case 'post':
                        return await api.post(path, (data ? data : headers), (data ? headers : null))
                    case 'put':
                        return await api.put(path, (data ? data : headers), (data ? headers : null))
                    case 'delete':
                        return await api.delete(path, (data ? data : headers), (data ? headers : null))
                    default:
                        return await api.get(path, (data ? data : headers), (data ? headers : null))
                }
            }

            const response = await callApi()

            if (!response)
                throw new Error('Não foi possível estabelecer uma conexão com o servidor')

            if (response.headers['x-token'])
                await AsyncStorage.setItem('x-token', response.headers['x-token'])

            if (response.headers['x-token-refresh'])
                await AsyncStorage.setItem('x-token-refresh', response.headers['x-token-refresh'])

            return response.data || response
        }
        catch (err) {
            const { response } = err

            if (response && response.status === 401) {
                await AsyncStorage.multiRemove(['x-token','x-token-refresh'])
                setAuth(false)
                setErrors('Disconnected')
                return null
            }
            setErrors(response ? response.data.message || response.data.error : 'Não foi possível estabelecer uma conexão com o servidor')
        }
    }, setErrors]
}

export default useFetch