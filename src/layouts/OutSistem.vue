<template>
  <div class="window-height window-width row justify-center items-center" id="login">
    <div class="column">
      <div class="row">
        <h5 class="text-h5 text-white q-my-md">Odonto Clinic</h5>
      </div>
      <div class="row">
        <q-card square bordered class="q-pa-lg shadow-1" id="card-login">
            <router-view />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutSistem'
}
</script>

<style>
#card-login {
  width: 360px;
}
#login {
  background: #fff url(../statics/background-clinic.jpg) 100% 100% repeat;
}
</style>
