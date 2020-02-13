import Vue from 'vue'
import axios from 'axios'
import { SessionStorage, Notify } from 'quasar'

const axiosInstance = axios.create({
        baseURL: 'http://localhost:8002'
    })

    axiosInstance.interceptors.request.use(config => {
        let user = SessionStorage.getItem('user')
        if (user) {
            config.headers.Authorization = `bearer ${user.token}`
        }
        return config
    }, error => {
            return Promise.reject(error)
    })

  axiosInstance.interceptors.response.use(response => {
        // Positive notification
        if (response.data.msg) {
            Notify.create({
                color: 'positive',
                position: 'top-right',
                message: response.data.msg,
                icon: 'done'
            })
        }
        return response
  }, error => {
        // Negative notification
        let msg = error.response.data.msg ? error.response.data.msg : 'Loading failed'
        Notify.create({
            color: 'negative',
            position: 'top-right',
            message: msg,
            icon: 'report_problem'
        })
        // Remove user if not logged
        let status = error.response.status
        if (status === 401) SessionStorage.set('user', null)
        return Promise.reject(error.response)
  })

  Vue.prototype.$axios = axiosInstance

export { axiosInstance }

// Vue.prototype.$axios = axios
// export default ({ Vue }) => {
//     // declare a request interceptor
//     axios.interceptors.request.use(config => {
//         // perform a task before the request is sent
//         console.log('Request was sent')
//         return config
//     }, error => {
//         // handle the error
//         return Promise.reject(error)
//     })

//     Vue.prototype.$axios = axios.create({
//         baseURL: 'http://localhost:8002',
//         withCredentials: false,
//         timeout: 1000,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
// }
