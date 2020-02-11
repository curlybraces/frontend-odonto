<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-blue-5">
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

        <div>Version 0.1.1</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <SideMenu :links="links"/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import SideMenu from 'components/SideMenu'

export default {
  name: 'MainLayout',

  components: {
    SideMenu
  },

  data () {
    return {
      leftDrawerOpen: false,
      links: [
        {
          title: 'Consults',
          caption: '',
          svg: 'tooth-inspect',
          link: '/consults/'
        },
        {
          title: 'Procedures Performed',
          caption: '',
          svg: 'toothbrush',
          link: '/procedures-performeds/'
        },
        {
          title: 'Clinics',
          caption: '',
          svg: 'dentist-chair',
          link: '/clinics/'
        },
        {
          title: 'Patients',
          caption: '',
          svg: 'tooth-add',
          link: '/patients/'
        },
        {
          title: 'Dentists',
          caption: '',
          svg: 'dentist',
          link: '/dentists/'
        },
        {
          title: 'Specialties',
          caption: '',
          svg: 'tooth-pliers',
          link: '/specialties/'
        },
        {
          title: 'Dentists Procedures',
          caption: '',
          svg: 'dental-care',
          link: '/dentists-procedures/'
        }
      ]
    }
  }
}
</script>
