<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/patients" label="Patients" />
        <q-breadcrumbs-el v-if="register.id" label="Patients Edit" />
        <q-breadcrumbs-el v-else label="Patients Create" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-input v-model="register.name" label="Name" :rules="[val => !!val || 'Field is required']"/>
        <q-select v-model="register.teething_type" :options="teething_type" label="Teething type" emit-value map-options/>
        <q-input v-model="register.age" label="Age" type="number"/>
        <q-select v-model="register.is_holder" :options="is_holder" label="Is Holder" emit-value map-options/>
        <template v-if="!register.is_holder">
          <q-select
            v-model="register.patient_id"
            :options="patients"
            option-value="id"
            option-label="name"
            map-options
            label="Patients"
            emit-value
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
import transations from '../../utils/transations'
import Phone from 'components/Phone'

export default {
  name: 'PageFormClinic',
  mixins: [transations],
  components: {
    Phone
  },
  data () {
    return {
      module: 'patients',
      register: {},
      patients: [],
      teething_type: [{ label: 'Adult', value: 0 }, { label: 'Child', value: 1 }],
      is_holder: [{ label: 'No', value: 0 }, { label: 'Yes', value: 1 }]
    }
  },
  computed: {
    requireds() {
      if (this.register.name && this.register.age) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields NAME, AGE must be completed'
    }
  },
  created () {
    const id = this.$router.currentRoute.params.id
    if (id) this.datasToEdit(id)
  },
  methods: {
    datasToEdit(id) {
      this.getRegister(id)
      this.getPatients()
    },
    async getRegister(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}`)
        if (response) this.register = response.data
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
