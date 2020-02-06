<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el label="Consults" />
      </q-breadcrumbs>
    </div>
    <div class="q-pa-md">
      <q-card class="my-card">
        <q-table
          title="Treats"
          :data="registers"
          :columns="columns"
          row-key="id"
          :filter="filter"
          :loading="loading"
          >
          <template v-slot:top>
            <q-btn color="primary" :disable="loading" label="Add register" @click="addRow" />
            <q-space />
            <q-input borderless dense debounce="300" color="primary" v-model="filter">
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
          <template v-slot:body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense round flat color="grey" @click="editRow(props)" icon="edit"></q-btn>
              <q-btn dense round flat color="grey" @click="deleteRow(props)" icon="delete"></q-btn>
            </q-td>
        </template>
        </q-table>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndexConsult',
  data () {
    return {
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
        { name: 'actions', label: 'Actions', field: 'actions' }
      ],
      registers: []
    }
  },
  created () {
    this.loadData()
  },
  methods: {
    addRow () {
      /**/
    },
    editRow (props) {
      /**/
    },
    deleteRow (props) {
      /**/
    },
    async loadData () {
      this.loading = true
      try {
        const response = await this.$axios.get('/api/consults')
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
