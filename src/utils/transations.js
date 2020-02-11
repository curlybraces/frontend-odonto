// import specialUcwords from 'src/utils/specialUcwords'
const transations = {
    methods: {
        transation(type, happen, msg = '') {
            let config = this.configs(type, happen, msg)
            const positionMsg = 'top-right'
            this.$q.notify({
                color: config.color,
                position: positionMsg,
                message: config.message,
                icon: config.icon
            })
        },
        configs(type, happen, msg) {
            if (type === 'error') return { message: msg, color: 'negative', icon: 'report_problem' }
            const word = this.words(type)
            if (happen) return { message: `${this.specialUcwords(word)} successfully`, color: 'positive', icon: 'done' }
            return { message: `Not ${word}`, color: 'negative', icon: 'report_problem' }
        },
        words(word) {
            if (word === 'edit') return 'edited'
            if (['create', 'delete'].includes(word)) return `${word}d`
            return 'work'
        },
        specialUcwords(s) {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    }
}

export default transations
