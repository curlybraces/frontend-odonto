<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el label="Consults" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <div>
        <q-select
            filled
            v-model="register.clinic_id"
            :options="clinics"
            option-value="id"
            option-label="name"
            map-options
            emit-value
            label="Clinic"
        />
        <q-select
            v-if="register.clinic_id"
            filled
            :key="register.clinic_id"
            v-model="register.dentist_id"
            :options="dentists"
            option-value="id"
            option-label="name"
            map-options
            emit-value
            label="Dentist"
        />
        <div class="q-gutter-md row items-start" v-if="register.dentist_id">
          <q-date
            v-model="register.day"
            mask="YYYY-MM-DD"
            color="blue-5"
            today-btn
            landscape
            :options="optionsFn"
          />
          <q-time
            v-model="register.hour"
            mask="HH:mm"
            color="blue-5"
            now-btn
            landscape
            :hour-options="hourOptions"
            :minute-options="minuteOptions"
            format24h
          />
        </div>
        <q-btn color="blue-5" class="full-width" :disable="loading" label="Create" />
      </div>
    </div>
    {{register}}
  </q-page>
</template>

<script>
import functions from '../../utils/functions'
import { date } from 'quasar'

export default {
  name: 'PageIndexConsult',
  mixins: [functions],
  data () {
    return {
      module: 'consults',
      dentists: [],
      clinics: [],
      consults: [],
      loading: true,
      register: {},
      hourOptions: [ 9, 10, 11, 13, 15 ],
      minuteOptions: [ 0 ],
      registers: []
    }
  },
  watch: {
    'register.clinic_id': {
        handler: function (after, before) {
          this.getDentists(after)
        },
        deep: true
    }
  },
  computed: {
    hasClinic () {
        return Object.keys(this.clinic).length
    },
    hasDentist () {
        return Object.keys(this.dentist).length
    }
  },
  created () {
    this.getClinics()
     let session = this.$q.sessionStorage.getItem('user')
     this.register.user_id = session.user.id
  },
  methods: {
    async getClinics() {
    try {
        const response = await this.$axios.get(`/api/clinics`)
        if (response) this.clinics = response.data
    } catch (e) {
        console.error(e)
    }
    },
    async getDentists(val) {
      try {
        const response = await this.$axios.get(`/api/clinics/${val}/dentists`)
        if (response) this.dentists = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async getConsults () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        if (response) this.consults = response.data
      } catch (e) {
        console.error(e)
      }
    },
    optionsFn (d) {
      return d >= date.formatDate(Date.now(), 'YYYY/MM/DD')
    },
    changeDate (value, reason, details) {
      console.log(details)
    }
  }
}
</script>
