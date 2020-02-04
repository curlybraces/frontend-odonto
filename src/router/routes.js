
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
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
    path: '/consults/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/consult/Index.vue') }
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
    path: '/dentists-procedures/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dentists-procedure/Index.vue') }
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
    path: '/procedures-performeds/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/procedures-performed/Index.vue') }
    ]
  },
  {
    path: '/schedules/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/schedule/Index.vue') }
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
    path: '/type-users/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/type-user/Index.vue') }
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

export default routes
