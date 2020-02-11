<template>
    <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <q-item v-for="link in links"
            :key="link.title"
            clickable
            v-ripple
            @click="active = link.title"
            :active="link.title === active"
            :to="link.link"
            active-class="my-menu-link"
        >
            <q-item-section avatar>
            <q-icon v-if="link.icon" :name="link.icon" />
            <q-icon v-else :name="'img:statics/dentist-icons/icons/'+link.svg+'.svg'" />
            </q-item-section>
            <q-item-section>{{link.title}}</q-item-section>
        </q-item>
    </q-list>
</template>

<script>
    export default {
        name: 'SideMenu',
        props: {
            links: { type: Array }
        },
        data () {
            return {
                active: ''
            }
        }
    }
</script>

<style lang="sass">
.my-menu-link
  color: white
  background: #29b6f6
</style>
