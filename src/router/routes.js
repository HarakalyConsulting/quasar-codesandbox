const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/owner/profile/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/owner/Profile.vue') }]
  },
  {
    path: '/owner/property/add',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/owner/PropertyAdd.vue') }]
  },
  {
    path: '/owner/property/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/owner/PropertyView.vue') }]
  },
  {
    path: '/owner/edl/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/owner/EdL.vue') }]
  },
  {
    path: '/lodger/profile/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/lodger/Profile.vue') }]
  },
  {
    path: '/:usertype/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/login.vue') }]
  },
  {
    path: '/:usertype/register',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/register.vue') }]
  },
  // Always leave this as last one
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
