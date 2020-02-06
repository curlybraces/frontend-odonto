<template>
  <q-page>
    <div class="q-pa-md">
        <q-input v-model="register.email" label="Name" />
        <q-input v-model="register.email" label="E-mail" />
        <q-input v-model="register.pass" label="Password" />
        <q-input v-model="register.pass_confirm" label="Password Confirm" />
        <q-btn color="green-6" class="full-width" label="Login" @click="login"/>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageRegister',
  data () {
    return {
      register: {}
    }
  },
  methods: {
    async login () {
      try {
        const response = await this.$axios.post('/api/register', this.register)
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
    }
  }
}
</script>
