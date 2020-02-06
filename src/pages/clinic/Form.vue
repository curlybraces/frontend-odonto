<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el to="/clinics" label="Clinics" />
        <q-breadcrumbs-el label="Clinics Create" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-input v-model="register.name" label="Name" />
        <q-input v-model="register.localization" label="Localization" />
        <q-input v-model="register.number" label="Number" />
        <q-input v-model="register.complement" label="Complement" />
        <q-btn v-if="register.id" color="green-6" class="full-width" label="Edit register" @click="edit"/>
        <q-btn v-else color="green-6" class="full-width" label="Add register" @click="create"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageFormClinic',
  data () {
    return {
      register: {}
    }
  },
  methods: {
    async create () {
      try {
        const response = await this.$axios.post('/api/clinics', this.register)
        console.log(response.data)
      } catch (e) {
        console.error(e)
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Not Works',
          icon: 'report_problem'
        })
      }
    },
    edit (props) {
      /**/
    }
  }
}
</script>
