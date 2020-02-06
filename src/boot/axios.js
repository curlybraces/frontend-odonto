import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
export default ({ Vue }) => {
    Vue.prototype.$axios = axios.create({
        baseURL: 'http://localhost:8002',
        withCredentials: false
        // timeout: 1000,
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
}
