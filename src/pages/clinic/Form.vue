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
      register: {}
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
    if (this.$router.currentRoute.params.id) this.getRegister(this.$router.currentRoute.params.id)
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
    async create () {
      try {
        const response = await this.$axios.post(`/api/${this.module}`, this.register)
        this.transation('create', response.data.success)
        if (response) {
          const id = response.data.obj.id
          this.$router.push(`edit/${id}`)
          this.getRegister(id)
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
