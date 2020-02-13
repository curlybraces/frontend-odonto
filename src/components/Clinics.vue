<template>
    <div>
        <q-select
            filled
            v-model="clinic"
            :options="clinics"
            option-value="id"
            option-label="name"
            map-options
            emit-value
            label="clinic"
            @input="emitClinic"
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
            clinic: {},
            clinics: []
        }
    },
    created () {
        this.getClinics()
    },
    methods: {
        async getClinics() {
            let url = this.module_id ? `/api/${this.module}/${this.module_id}/clinics` : '/api/clinics'
            try {
                const response = await this.$axios.get(url)
                if (response) this.clinics = response.data
            } catch (e) {
                console.error(e)
            }
        },
        emitClinic () {
            this.$emit('input', this.clinic)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
