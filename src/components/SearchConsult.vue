<template>
    <div>
        <q-select
            filled
            v-model="clinic"
            :options="clinics"
            option-value="id"
            option-label="name"
            map-options
            label="Clinic"
        />
        <q-select
            v-if="hasClinic"
            filled
            v-model="dentist"
            :options="dentists"
            option-value="id"
            option-label="name"
            map-options
            label="Dentist"
        />
    </div>
</template>

<script>
export default {
  name: 'SearchConsult',
  data () {
    return {
      module: 'consults',
      dentists: [],
      clinics: []
    }
  },
  watch: {
      dentist () {
          if (this.hasClinic && this.hasDentist) this.search()
      },
      clinic () {
          if (this.hasClinic) this.getDentists()
      }
  },
  computed: {
    dentist: {
        get () {
            return this.$store.state.consult.dentist
        },
        set (val) {
            this.$store.commit('consult/updateDentist', val)
        }
    },
    clinic: {
        get () {
            return this.$store.state.consult.clinic
        },
        set (val) {
            this.$store.commit('consult/updateClinic', val)
        }
    },
    hasClinic () {
        return Object.keys(this.clinic).length
    },
    hasDentist () {
        return Object.keys(this.dentist).length
    }
  },
  created () {
    this.getClinics()
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
    async getDentists() {
      try {
        const response = await this.$axios.get(`/api/clinics/${this.clinic.id}/dentists`)
        if (response) this.dentists = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async search () {
      try {
        const register = { dentist_id: this.dentist.id, clinic_id: this.clinic.id }
        const response = await this.$axios.post(`/api/${this.module}`, register)
        if (response) this.$store.commit('consult/updateConsults', response.data)
        this.$emit('searched', true)
      } catch (e) {
        console.error(e)
        // this.transation('error', false, 'Not searched')
      }
    }
  }
}
</script>
