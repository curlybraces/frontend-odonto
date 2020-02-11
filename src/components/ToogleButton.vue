<template>
    <div>
    <q-btn v-if="!$q.screen.lt.sm" color="blue-5" class="full-width" :disable="loading" label="Add register" :to="to" />
      <q-page-sticky v-else position="bottom-right" :offset="[18, 18]">
        <q-btn :disable="loading" fab icon="add" color="blue-5" :to="to"/>
      </q-page-sticky>
    </div>
</template>

<script>
    export default {
       props: {
           loading: { type: Boolean, default: false },
           to: { type: String, default: '/' }
       }
    }
</script>
