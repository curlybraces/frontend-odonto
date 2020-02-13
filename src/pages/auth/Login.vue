<template>
  <div>
    <q-card-section>
      <q-form class="q-gutter-md">
        <q-input square filled clearable v-model="register.email" type="email" label="email" />
        <q-input square filled clearable v-model="register.password" type="password" label="password" aria-label="current-password"/>
      </q-form>
    </q-card-section>
    <q-card-actions class="q-px-md">
      <q-btn unelevated color="light-blue-5" size="lg" class="full-width" label="Login" @click="login"/>
    </q-card-actions>
    <q-card-section class="text-center q-pa-none">
      <p class="text-grey-6">Not reigistered? Created an Account</p>
    </q-card-section>
  </div>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      register: {}
    }
  },
  methods: {
    async login () {
    // this.$axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMlwvYXBpXC9sb2dpbiIsImlhdCI6MTU4MDk1MTA5NiwiZXhwIjoxNTgwOTU0Njk2LCJuYmYiOjE1ODA5NTEwOTYsImp0aSI6IkZrbzVOTHJyc09QRWpWdlgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s5oldQyxiA9SIe4CRlSHLntVy6R6NAAPT4O24HjDHs4'
        try {
          const response = await this.$axios.post('/api/login', this.register)
          if (response.status === 200) {
            this.$store.commit('users/login', { token: response.data.token, user: response.data.user })
            this.$router.push('/')
          }
        } catch (e) {
          console.error(e)
        }
      }
  }
}
</script>

