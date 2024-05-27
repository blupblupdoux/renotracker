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
    path: '/project/:projectId',
    props: true,
    component: () => import('../views/layouts/ProjectLayout.vue'),
    children: [
      { path: '', component: () => import('../views/pages/ProjectDashboard.vue')},
      { path: 'subProjects', component: () => import('../views/pages/SubProjectsAll.vue')},
      { path: 'purchases', component: () => import('../views/pages/PurchasesAll.vue')},
      {
        path: 'subProject/:subProjectId',
        props: true,
        component: () => import('../views/layouts/SubProjectLayout.vue'),
        children: [
          { path: '', component: () => import('../views/pages/SubProjectDashboard.vue')},
          
        ]
      },
    ]
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
