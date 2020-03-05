<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/dentists-procedures" label="DentistProcedures" />
        <q-breadcrumbs-el v-if="register.id" label="DentistProcedures Edit" />
        <q-breadcrumbs-el v-else label="DentistProcedures Create" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-select
          filled
          v-model="register.specialtie_id"
          :options="specialties"
          option-value="id"
          option-label="name_specialty"
          emit-value
          map-options
          label="Specialtie"
        />
        <q-input v-model="register.name_procedure" label="Name" :rules="[val => !!val || 'Field is required']"/>
        <q-color v-model="register.color" class="my-picker" />
        <template v-if="register.id">
          <q-btn :disable="requireds" color="green-5" class="full-width" label="Edit register" @click="edit">
            <q-tooltip>
              {{msgRequired}}
            </q-tooltip>
          </q-btn>
        </template>
        <template v-else>
          <q-btn color="green-5" :disable="requireds" class="full-width" label="Add register" @click="create">
            <q-tooltip>
              {{msgRequired}}
            </q-tooltip>
          </q-btn>
        </template>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFormDentistProcedure',
  data () {
    return {
      module: 'dentists-procedures',
      register: {},
      specialties: []
    }
  },
  computed: {
    requireds() {
      if (this.register.name_procedure && this.register.specialtie_id) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields SPECIALTY, NAME must be completed'
    }
  },
  created () {
    const id = this.$router.currentRoute.params.id
    if (id) this.getRegister(id)
    this.getSpecialties()
  },
  methods: {
    async getRegister(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}`)
        if (response) this.register = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async getSpecialties() {
      try {
        const response = await this.$axios.get(`/api/specialties`)
        if (response) this.specialties = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async create () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        if (response) this.$router.push(`/${this.module}`)
      } catch (e) {
        console.error(e)
      }
    },
    async edit (props) {
      try {
        const response = await this.$axios.put(`/api/${this.module}/${this.register.id}`, this.register)
        if (response) this.$router.push(`/${this.module}`)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>
