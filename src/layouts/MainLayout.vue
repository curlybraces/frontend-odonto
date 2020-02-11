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
            <q-icon v-if="link.icon" :name="link.icon" />
            <q-icon v-else :name="'img:statics/dentist-icons/icons/'+link.svg+'.svg'" />
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
          svg: 'dentist-chair',
          link: '/clinics/'
        },
        {
          title: 'Consults',
          caption: '',
          svg: 'tooth-inspect',
          link: '/consults/'
        },
        {
          title: 'Dentists',
          caption: '',
          svg: 'dentist',
          link: '/dentists/'
        },
        {
          title: 'Patients',
          caption: '',
          svg: 'tooth-add',
          link: '/patients/'
        },
        {
          title: 'Procedures Performed',
          caption: '',
          svg: 'toothbrush',
          link: '/procedures-performeds/'
        },
        {
          title: 'Dentists Procedures',
          caption: '',
          svg: 'dental-care',
          link: '/dentists-procedures/'
        },
        {
          title: 'Specialties',
          caption: '',
          svg: 'toothbrush',
          link: '/specialties/'
        }
      ]
    }
  }
}
</script>
