<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/dentists" label="Dentists" />
        <q-breadcrumbs-el v-if="register.id" label="Dentists Edit" />
        <q-breadcrumbs-el v-else label="Dentists Create" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <q-input v-model="register.name" label="Name" :rules="[val => !!val || 'Field is required']"/>
      <q-input v-model="register.register_number" label="Register Number" :rules="[val => !!val || 'Field is required']"/>
      <template v-if="register.id">
        <q-select
          filled
          v-model="specialtiesMember"
          multiple
          :options="specialties"
          option-value="id"
          option-label="name_specialty"
          map-options
          use-chips
          use-input
          stack-label
          label="Dentist specialties"
          @add="updateSpecialties"
          @remove="updateSpecialties"
        />
        <q-select
          filled
          v-model="clinicsMember"
          multiple
          :options="clinics"
          option-value="id"
          option-label="name"
          map-options
          use-chips
          use-input
          stack-label
          label="Member clinics"
          @add="updateClinic"
          @remove="updateClinic"
        />
      </template>
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
      <q-separator />
      <Phone v-if="register.id" :id_register="register.id" :module="module"/>
    </div>
  </q-page>
</template>

<script>
import Phone from 'components/Phone'
export default {
  name: 'PageFormClinic',
  components: {
    Phone
  },
  data () {
    return {
      module: 'dentists',
      register: {},
      clinics: [],
      clinicsMember: [],
      specialties: [],
      specialtiesMember: []
    }
  },
  computed: {
    requireds() {
      if (this.register.name && this.register.register_number) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields NAME, REGISTER NUMBER must be completed'
    }
  },
  created () {
    const id = this.$router.currentRoute.params.id
    if (id) this.datasToEdit(id)
  },
  methods: {
    datasToEdit(id) {
      this.getRegister(id)
      this.membersClinics(id)
      this.getClinics()
      this.getSpecialties()
    },
    async getRegister(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}`)
        if (response) this.register = response.data
      } catch (e) {
        console.error(e)
      }
    },
    // turn in component
    async getClinics() {
      try {
        const response = await this.$axios.get(`/api/clinics`)
        if (response) this.clinics = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async membersClinics(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}/clinics`)
        if (response) this.clinicsMember = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async updateClinic() {
      const id = this.register.id
      try {
        await this.$axios.post(`/api/${this.module}/${id}/clinics`, this.clinicsMember)
      } catch (e) {
        console.error(e)
      }
    },
    // turn in component
    async getSpecialties() {
      try {
        const response = await this.$axios.get(`/api/specialties`)
        if (response) this.specialties = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async membersSpecialties(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}/specialties`)
        if (response) this.SpecialtiesMember = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async updateSpecialties() {
      const id = this.register.id
      try {
        await this.$axios.post(`/api/${this.module}/${id}/specialties`, this.specialtiesMember)
      } catch (e) {
        console.error(e)
      }
    },
    async create () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        if (response) {
          const id = response.data.obj.id
          this.$router.push(`edit/${id}`)
          this.datasToEdit(id)
        }
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
