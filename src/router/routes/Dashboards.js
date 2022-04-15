import { lazy } from 'react'

const DashboardRoutes = [
  // Dashboards
  // {
  //   path: '/dashboard/analytics',
  //   component: lazy(() => import('../../views/dashboard/analytics'))
  // },
  // {
  //   path: '/dashboard/ecommerce',
  //   component: lazy(() => import('../../views/dashboard/ecommerce')),
  //   exact: true
  // },
  {
    path: '/dashboard/List',
    component: lazy(() => import('../../views/dashboard/List')),
    exact: true
  }
]

export default DashboardRoutes
