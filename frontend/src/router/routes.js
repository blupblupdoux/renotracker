const routes = [

  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('../views/pages/AuthFormPage.vue') },
      { path: 'register', component: () => import('../views/pages/AuthFormPage.vue') }
    ]
  },
  {
    path: '/user/profile',
    component: () => import('../views/pages/UserProfile.vue')
  },
  // {
  //   path: '/projects',
  //   component: () => import('../views/user/UserProfile.vue')
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('../views/pages/ErrorNotFoundPage.vue')
  }
]

export default routes
