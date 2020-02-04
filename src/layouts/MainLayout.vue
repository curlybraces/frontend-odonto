<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Odonto clinic
        </q-toolbar-title>

        <div>Version 0.0.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">Essential Links</q-item-label>
        <q-item v-for="link in essentialLinks"
          :key="link.title"
          clickable
          v-ripple
          @click="active == link.title"
          :active="link.title === active"
          :to="link.link"
          active-class="my-menu-link"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>{{link.title}}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  // components: {
  //   EssentialLink
  // },

  data () {
    return {
      leftDrawerOpen: false,
      active: '',
      essentialLinks: [
        {
          title: 'Clinics',
          caption: '',
          icon: 'home',
          link: '/clinics/'
        },
        {
          title: 'Consults',
          caption: '',
          icon: 'fas fa-tooth',
          link: '/consults/'
        },
        {
          title: 'Dentists',
          caption: '',
          icon: 'fa fa-tooth',
          link: '/dentists/'
        },
        {
          title: 'Dentists Procedures',
          caption: '',
          icon: 'fa fa-tooth',
          link: '/dentists-procedures/'
        },
        {
          title: 'Patients',
          caption: '',
          icon: 'fa fa-user',
          link: '/patients/'
        },
        {
          title: 'Procedures Performed',
          caption: '',
          icon: 'fa fa-users',
          link: '/procedures-performeds/'
        },
        {
          title: 'Schedules',
          caption: '',
          icon: 'fa fa-calendar-alt',
          link: '/schedules/'
        },
        {
          title: 'Specialties',
          caption: '',
          icon: 'fa fa-tooth',
          link: '/specialties/'
        },
        {
          title: 'Type users',
          caption: '',
          icon: 'fa fa-users',
          link: '/type-users/'
        }
      ]
    }
  }
}
</script>
