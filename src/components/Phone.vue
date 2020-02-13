<template>
  <div>
    <q-separator />
    <template v-if="add">
      <q-select v-model="register.type_phone" :options="type_phone" label="Phone Type" emit-value map-options/>
      <q-input v-model="register.number" type="tel"  mask="(###) #### - ####" label="Number"/>
      <template v-if="register.id">
        <q-btn color="red-6" class="full-width" label="Cancel" @click="cancelRow"/>
        <q-btn :disable="requireds" color="green-6" class="full-width" label="Edit phone" @click="update">
          <q-tooltip>
            {{msgRequired}}
          </q-tooltip>
        </q-btn>
      </template>
      <template v-else>
        <q-btn color="red-6" class="full-width" label="Cancel" @click="add = !add"/>
        <q-btn color="green-6" :disable="requireds" class="full-width" label="Add phone" @click="create">
          <q-tooltip>
            {{msgRequired}}
          </q-tooltip>
        </q-btn>
      </template>
    </template>
    <template v-else>
      <q-btn color="green-6" class="full-width" label="Add phone" @click="add = !add"/>
    </template>
    <div>
      <q-table
        title="Phones"
        :data="phones"
        :columns="[
          {
            name: 'number',
            required: true,
            label: 'Number',
            field: row => row.number,
            format: val => `${val}`,
            sortable: true
          },
          { name: 'type_phone', label: 'Type Phone', field: 'type_phone' },
          { name: 'actions', label: 'Actions', field: 'actions' }
        ]"
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
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="type_phone" :props="props">
              {{ props.row.type_phone }}
            </q-td>
            <q-td key="number" :props="props">
              {{ props.row.number }}
            </q-td>
            <q-td key="actions" :props="props">
              <q-btn dense round flat color="grey" @click="editRow(props.row)" icon="edit"></q-btn>
              <q-btn dense round flat color="grey" @click="deleteRow(props.row)" icon="delete"></q-btn>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicPhone',
  props: {
    id_register: { type: Number },
    module: { type: String }
  },
  data() {
    return {
      filter: '',
      loading: false,
      add: false,
      register: {},
      phones: [],
      type_phone: ['landline', 'commercial', 'cell phone']
    }
  },
  computed: {
    requireds() {
      if (this.register.type_phone && this.register.number) return false
      return true
    },
    msgRequired() {
        return 'to submit the fields TYPE PHONE, NUMBER must be completed'
    }
  },
  created () {
    this.loadPhones(this.id_register)
  },
  methods: {
    async loadPhones(id) {
      try {
        const response = await this.$axios.get(`/api/${this.module}/${id}/phones`)
        if (response) this.phones = response.data.obj
        this.add = false
      } catch (e) {
        console.error(e)
      }
    },
    async create () {
      try {
        const response = await this.$axios.post(`/api/${this.module}/${this.id_register}/phones`, this.register)
        if (response) this.loadPhones(this.id_register)
        this.register = {}
      } catch (e) {
        console.error(e)
      }
    },
    cancelRow () {
      this.register = {}
      this.add = false
    },
    editRow (props) {
      this.add = true
      this.register = props
    },
    async update (props) {
      try {
        const response = await this.$axios.put(`/api/${this.module}/${this.id_register}/phones/${this.register.id}`, this.register)
        if (response) this.loadPhones(this.id_register)
      } catch (e) {
        console.error(e)
      }
    },
    async deleteRow (row) {
      try {
        const response = await this.$axios.delete(`/api/${this.module}/${this.id_register}/phones/${row.id}`)
        if (response) this.loadPhones(this.id_register)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
