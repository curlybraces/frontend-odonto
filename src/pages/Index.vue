<template>
  <q-page class="flex flex-center" id="home">
    <q-icon alt="Odonto clinic logo" name="img:statics/dentist-icons/icons/dentist-chair.svg" id="logo-chair"/>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="stylus" scoped>
#logo-chair {
  height: 40%;
  width: 40%;
}
#home {
  background: #fff url(../statics/background-clinic.jpg) 100% 100% repeat;
}
</style>
