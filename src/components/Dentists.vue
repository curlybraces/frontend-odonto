<template>
    <div>
        <q-select
            filled
            v-model="dentist"
            :options="dentists"
            option-value="id"
            option-label="name"
            map-options
            emit-value
            label="Dentist"
            @input="emitDentist"
        >
            <template v-slot:no-option>
                <q-item>
                    <q-item-section class="text-italic text-grey">
                    No options slot
                    </q-item-section>
                </q-item>
            </template>
        </q-select>
    </div>
</template>

<script>
export default {
    props: {
        module: { type: String },
        module_id: { type: Number }
    },
    data () {
        return {
            dentist: {},
            dentists: []
        }
    },
    // created () {
    //     this.getDentists()
    // },
    watch: {
        module_id (oldVal, newVal) {
            console.log(oldVal)
            if (oldVal !== newVal) this.getDentists()
        }
    },
    methods: {
        async getDentists() {
            let url = this.module_id ? `/api/${this.module}/${this.module_id}/dentists` : '/api/dentists'
            console.log(url)
            try {
                const response = await this.$axios.get(url)
                if (response) this.dentists = response.data
            } catch (e) {
                console.error(e)
            }
        },
        emitDentist () {
            this.$emit('input', this.dentist)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
