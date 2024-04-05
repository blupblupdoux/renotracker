const routes = [
  {
    path: '/auth',
    children: [
      { path: 'login', component: () => import('components/auth/AuthLogin.vue') },
      { path: 'register', component: () => import('components/auth/AuthRegister.vue') }
    ]
  },
]

export default routes
