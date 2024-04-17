import authRoutes from './auth'

const routes = [

  ...authRoutes,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'notFound',
    component: () => import('../views/ErrorNotFound.vue')
  }
]

export default routes
