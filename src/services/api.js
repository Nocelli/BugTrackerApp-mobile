import axios from 'axios'

const api = axios.create({
    baseURL: (process.env.NODE_ENV !== 'production' ? 'http://192.168.0.15:2000' : 'https://bug-trackerapp.herokuapp.com')
})

export default api