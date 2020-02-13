<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el label="Consults" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <div>
        <SearchConsult @searched="toogleSearch"/>
        <div class="q-gutter-md row items-start" v-if="searched">
          <q-date
            v-model="register.day"
            mask="YYYY-MM-DD"
            color="blue-5"
            today-btn
            landscape
            :options="optionsFn"
          />
          <q-time
            v-model="register.hour"
            mask="HH:mm"
            color="blue-5"
            now-btn
            landscape
            :hour-options="hourOptions"
            :minute-options="minuteOptions"
            format24h
          />
        </div>
        <q-btn color="blue-5" class="full-width" :disable="!searched" label="Create" @click="toogleSearch"/>
      </div>
    </div>
    {{register}}
  </q-page>
</template>

<script>
import functions from '../../utils/functions'
import SearchConsult from 'components/SearchConsult'
import { date } from 'quasar'

export default {
  name: 'PageIndexConsult',
  mixins: [functions],
  components: {
    SearchConsult
  },
  data () {
    return {
      module: 'consults',
      searched: false,
      loading: true,
      register: {},
      hourOptions: [ 9, 10, 11, 13, 15 ],
      minuteOptions: [ 0 ],
      registers: []
    }
  },
  computed: {
    consults: {
        get () {
            return this.$store.state.consult.consults
        },
        set (val) {
            this.$store.commit('consult/updateConsults', val)
        }
    }
  },
  created () {
    this.baseRegister()
    this.stored = this.$store.state.consult
  },
  methods: {
    baseRegister () {
      this.register.clinic_id = this.$store.state.consult.clinic.id
      this.register.dentist_id = this.$store.state.consult.dentist.id
    },
    toogleSearch () {
      this.searched = !this.searched
    },
    optionsFn (d) {
      return d >= date.formatDate(Date.now(), 'YYYY/MM/DD')
    },
    changeDate (value, reason, details) {
      console.log(details)
    }
  }
}
</script>
