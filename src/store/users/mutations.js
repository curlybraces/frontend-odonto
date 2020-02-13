import axios from 'axios'
import { SessionStorage } from 'quasar'

export const login = (state, payload) => {
    try {
        SessionStorage.set('user', payload)
    } catch (e) {
    console.log(e)
    }
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + payload.token
}


