
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/OutSistem.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/OutSistem.vue'),
    children: [
      { path: '', component: () => import('pages/auth/Register.vue') }
    ]
  },
  {
    path: '/clinics/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/clinic/Index.vue') }
    ]
  },
  {
    path: '/clinics/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/clinic/Form.vue') }
    ]
  },
  {
    path: '/clinics/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/clinic/Form.vue') }
    ]
  },
  {
    path: '/consults/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/consult/Index.vue') }
    ]
  },
  {
    path: '/consults/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/consult/Form.vue') }
    ]
  },
  {
    path: '/consults/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/consult/Form.vue') }
    ]
  },
  {
    path: '/dentists/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentist/Index.vue') }
    ]
  },
  {
    path: '/dentists/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentist/Form.vue') }
    ]
  },
  {
    path: '/dentists/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentist/Form.vue') }
    ]
  },
  {
    path: '/dentists-procedures/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentists-procedure/Index.vue') }
    ]
  },
  {
    path: '/dentists-procedures/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentists-procedure/Form.vue') }
    ]
  },
  {
    path: '/dentists-procedures/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentists-procedure/Form.vue') }
    ]
  },
  {
    path: '/patients/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/patient/Index.vue') }
    ]
  },
  {
    path: '/patients/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/patient/Form.vue') }
    ]
  },
  {
    path: '/patients/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/patient/Form.vue') }
    ]
  },
  {
    path: '/procedures-performeds/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/procedures-performed/Index.vue') }
    ]
  },
  {
    path: '/procedures-performeds/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/procedures-performed/Form.vue') }
    ]
  },
  {
    path: '/procedures-performeds/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/procedures-performed/Form.vue') }
    ]
  },
  {
    path: '/specialties/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/specialtie/Index.vue') }
    ]
  },
  {
    path: '/specialties/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/specialtie/Form.vue') }
    ]
  },
  {
    path: '/specialties/edit/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/specialtie/Form.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

// routes.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login']
//   const authRequired = !publicPages.includes(to.path)
//   const loggedIn = localStorage.getItem('user')

//   if (authRequired && !loggedIn) {
//     return next('/login')
//   }

//   next()
// })

export default routes
