<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/clinics" label="Clinics" />
        <q-breadcrumbs-el v-if="register.id" label="Clinics Edit" />
        <q-breadcrumbs-el v-else label="Clinics Create" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-input v-model="register.name" label="Name" :rules="[val => !!val || 'Field is required']"/>
        <q-input v-model="register.localization" label="Localization" :rules="[val => !!val || 'Field is required']"/>
        <q-input v-model="register.number" label="Number" />
        <q-input v-model="register.complement" label="Complement" />
        <template v-if="register.id">
          <q-select
            filled
            v-model="dentistsMember"
            multiple
            :options="dentists"
            option-value="id"
            option-label="name"
            map-options
            use-chips
            use-input
            stack-label
            label="Member dentists"
            @add="updateDentist"
            @remove="updateDentist"
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
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFormClinic',
  data () {
    return {
      module: 'clinics',
      register: {},
      dentists: [],
      dentistsMember: []
    }
  },
  computed: {
    requireds() {
      if (this.register.name && this.register.localization) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields NAME, LOCALIZATION must be completed'
    }
  },
  created () {
    const id = this.$router.currentRoute.params.id
    if (id) this.datasToEdit(id)
  },
  methods: {
    datasToEdit(id) {
      this.getRegister(id)
      this.membersDentists(id)
      this.getDentists()
    },
    async getRegister(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}`)
        if (response) this.register = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async getDentists() {
      try {
        const response = await this.$axios.get(`/api/dentists`)
        if (response) this.dentists = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async membersDentists(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}/dentists`)
        if (response) this.dentistsMember = response.data
      } catch (e) {
        console.error(e)
      }
    },
    async updateDentist() {
      const id = this.register.id
      try {
        await this.$axios.post(`/api/${this.module}/${id}/dentists`, this.dentistsMember)
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
