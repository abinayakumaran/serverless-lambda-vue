/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '*'
  },
  {
    path: '/',
    meta: {
      name: 'User View'
    },
    component: () => import(`@/components/DashViews/UsersTable.vue`)
  }
]
