<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el label="ProceduresPerformeds" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
        <q-table
          title="ProceduresPerformeds"
          :data="registers"
          :columns="columns"
          row-key="id"
          :filter="filter"
          :loading="loading"
          >
          <template v-slot:top>
            <q-space />
            <q-input borderless dense debounce="300" color="primary" v-model="filter">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense round flat color="grey" @click="editRow(props.row)" icon="edit"></q-btn>
              <q-btn dense round flat color="grey" @click="deleteRow(props.row)" icon="delete"></q-btn>
            </q-td>
        </template>
        </q-table>
        <ToogleButton :loading="loading" to="/procedures-performeds/create"/>
    </div>
  </q-page>
</template>

<script>
import transations from '../../utils/transations'
import ToogleButton from 'components/ToogleButton'
export default {
  name: 'PageIndexProceduresPerformed',
  mixins: [transations],
  components: {
    ToogleButton
  },
  data () {
    return {
      module: 'procedures-performeds',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'localization',
          required: true,
          label: 'Localization',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'name', label: 'Name', field: 'name' },
        { name: 'number', label: 'Number', field: 'number' },
        { name: 'complement', label: 'Complement', field: 'complement' },
        { name: 'actions', label: 'Actions', field: 'actions' }
      ],
      registers: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    editRow (row) {
      this.$router.push(`/${this.module}/edit/${row.id}`)
    },
    async deleteRow (row) {
      try {
        const response = await this.$axios.delete(`/api/${this.module}/${row.id}`)
        this.transation('delete', response.data.success)
        this.loadData()
      } catch (e) {
        console.error(e)
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      }
    },
    async loadData () {
      this.loading = true
      try {
        const response = await this.$axios.get(`/api/${this.module}`)
        this.registers = response.data
      } catch (e) {
        console.error(e)
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      }
      this.loading = false
    }
  }
}
</script>
