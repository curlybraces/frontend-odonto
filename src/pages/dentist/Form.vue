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
          <q-btn :disable="requireds" color="green-6" class="full-width" label="Edit register" @click="edit">
            <q-tooltip>
              {{msgRequired}}
            </q-tooltip>
          </q-btn>
        </template>
        <template v-else>
          <q-btn color="green-6" :disable="requireds" class="full-width" label="Add register" @click="create">
            <q-tooltip>
              {{msgRequired}}
            </q-tooltip>
          </q-btn>
        </template>
    </div>
  </q-page>
</template>

<script>
import transations from '../../utils/transations'
export default {
  name: 'PageFormClinic',
  mixins: [transations],
  data () {
    return {
      module: 'clinics',
      register: {},
      clinics: [],
      clinicsMember: []
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
    },
    async getRegister(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}`)
        if (response) this.register = response.data
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
        const response = await this.$axios.post(`/api/${this.module}/${id}/clinics`, this.clinicsMember)
        this.transation('edit', response.data.success)
      } catch (e) {
        console.error(e)
      }
    },
    async create () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        this.transation('create', response.data.success)
        if (response) {
          const id = response.data.obj.id
          this.$router.push(`edit/${id}`)
          this.datasToEdit(id)
        }
      } catch (e) {
        console.error(e)
        this.transation('create', false)
      }
    },
    async edit (props) {
      try {
        const response = await this.$axios.put(`/api/${this.module}/${this.register.id}`, this.register)
        this.transation('edit', response.data.success)
        if (response) this.$router.push(`/${this.module}`)
      } catch (e) {
        console.error(e)
        this.transation('edit', false)
      }
    }
  }
}
</script>
