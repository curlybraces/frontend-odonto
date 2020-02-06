<template>
  <div class="bg-light-blue window-height window-width row justify-center items-center">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Odonto Clinic</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input square filled clearable v-model="register.email" type="email" label="email" />
              <q-input square filled clearable v-model="register.password" type="password" label="password" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn unelevated color="light-blue-7" size="lg" class="full-width" label="Login" @click="login"/>
          </q-card-actions>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">Not reigistered? Created an Account</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
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
    this.$axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMlwvYXBpXC9sb2dpbiIsImlhdCI6MTU4MDk1MTA5NiwiZXhwIjoxNTgwOTU0Njk2LCJuYmYiOjE1ODA5NTEwOTYsImp0aSI6IkZrbzVOTHJyc09QRWpWdlgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.s5oldQyxiA9SIe4CRlSHLntVy6R6NAAPT4O24HjDHs4'
        try {
          const response = await this.$axios.post('/api/login', {
            'email': this.register.email,
            'password': this.register.password
          })
          console.log(response.data)
        } catch (e) {
          console.error(e)
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem'
          })
        }
      }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
