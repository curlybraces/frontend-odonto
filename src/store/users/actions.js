export function setAxiosHeaders (token) {
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
