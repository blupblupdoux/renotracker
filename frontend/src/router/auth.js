const routes = [
  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('../views/auth/AuthLogin.vue') },
      { path: 'register', component: () => import('../views/auth/AuthRegister.vue') }
    ]
  },
]

export default routes
