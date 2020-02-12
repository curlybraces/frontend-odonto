<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el label="Search Consults" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-select
          filled
          v-model="register.dentist_id"
          :options="dentists"
          option-value="id"
          option-label="name"
          map-options
          emit-value
          label="Member dentists"
        />
        <q-select
          filled
          v-model="register.clinic_id"
          :options="clinics"
          option-value="id"
          option-label="name"
          map-options
          emit-value
          label="Member dentists"
        />
        <q-btn :disable="requireds" color="green-5" class="full-width" label="Search" @click="search">
          <q-tooltip>
            {{msgRequired}}
          </q-tooltip>
        </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageSearchConsult',
  data () {
    return {
      module: 'consult',
      register: {},
      dentists: [],
      clinics: []
    }
  },
  computed: {
    requireds() {
      if (this.register.clinic_id && this.register.dentist_id) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields CLINIC, DENTIST must be completed'
    }
  },
  created () {
    this.getDentists()
    this.getClinics()
  },
  methods: {
    async getDentists() {
      try {
        const response = await this.$axios.get(`/api/dentists`)
        if (response) this.dentists = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async getClinics() {
      try {
        const response = await this.$axios.get(`/api/clinics`)
        if (response) this.clinics = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async search () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        if (response) {
          return response.data.obj.id
        }
      } catch (e) {
        console.error(e)
        this.transation('error', false, 'Not searched')
      }
    }
  }
}
</script>
