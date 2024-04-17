const routes = [

  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('../views/pages/AuthForm.vue') },
      { path: 'register', component: () => import('../views/pages/AuthForm.vue') }
    ]
  },
  {
    path: '/user/profile',
    component: () => import('../views/pages/UserProfile.vue')
  },
  {
    path: '/projects',
    component: () => import('../views/pages/ProjectsAll.vue')
  },
  {
    path: '/project/:id',
    component: () => import('../views/pages/ProjectDashboard.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('../views/pages/ErrorNotFound.vue')
  }
]

export default routes
