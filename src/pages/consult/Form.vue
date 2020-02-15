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
        <h4 v-if="!register.clinic_id">The fields will appear as the form is filled</h4>
        <q-date
          class="wd"
          v-if="register.dentist_id"
          v-model="register.consult_date"
          mask="YYYY-MM-DD"
          color="blue-5"
          today-btn
          landscape
          :options="optionsFn"
          @input="changeDate"
        />
        <q-select
        filled
        v-if="register.consult_date"
        v-model="register.consult_hour"
        :options="consults"
        label="Select Hour"
        color="teal"
        clearable
        option-value="consult_hour"
        option-label="consult_hour"
        map-options
        emit-value
        options-selected-class="text-blue-5"
      >
      </q-select>
        <q-select
          filled
          v-if="register.consult_hour"
          v-model="register.patient_id"
          use-input
          input-debounce="0"
          label="Select patient"
          :options="patients"
          behavior="menu"
          option-value="id"
          option-label="name"
          map-options
          emit-value
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey">
                No results
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        <q-btn color="blue-5" class="full-width" v-if="register.patient_id" @click="createConsult" label="Create" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PageIndexConsult',
  data () {
    return {
      module: 'consults',
      dentists: [],
      clinics: [],
      consults: [],
      patients: [],
      active: null,
      loading: false,
      register: {}
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
  filters: {
    formatHour (val) {
      return val.slice(1, 6)
    }
  },
  computed: {
    hourOptions () {
      let element = []
      for (let index = 8; index < 18; index++) {
        element.push(index)
      }
      return element
    }
  },
  created () {
    this.getClinics()
    this.getPatients()
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
    async getPatients() {
      try {
          const response = await this.$axios.get(`/api/patients`)
          if (response) this.patients = response.data
      } catch (e) {
          console.error(e)
      }
    },
    async getConsults () {
      this.loading = true
      try {
        const response = await this.$axios.get(`/api/consult-search`, {
          params: this.register
        })
        this.consults = response.data
      } catch (e) {
        console.error(e)
      }
      this.loading = false
    },
    async createConsult () {
      let session = this.$q.sessionStorage.getItem('user')
      this.register.user_id = session.user.id
      try {
        const response = await this.$axios.post(`/api/consults`, this.register)
        if (response.data.success) this.$router.push(`/${this.module}`)
      } catch (e) {
        console.error(e)
      }
    },
    toPatient (id) {
      this.$router.push(`/patients/edit/${id}`)
    },
    optionsFn (d) {
      return d >= date.formatDate(Date.now(), 'YYYY/MM/DD')
    },
    changeHour (value) {
      this.register.consult_hour = value.consult_hour
    },
    changeDate (value, reason, details) {
      this.getConsults()
    }
  }
}
</script>
<style lang="stylus" scoped>
.wd {
  width: 100%;
}
</style>
