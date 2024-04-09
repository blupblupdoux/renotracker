const routes = [
  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('../views/auth/AuthForm.vue') },
      { path: 'register', component: () => import('../views/auth/AuthForm.vue') }
    ]
  },
]

export default routes
