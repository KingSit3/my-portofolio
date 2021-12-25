import RestoranAdmin from '../views/restoran/RestoranAdmin.vue'

import DashboardAdmin from '../components/restoran/admin/Dashboard.vue'

const route = [
  {
    name: 'restoranAdmin',
    path: '/restoran',
    component: RestoranAdmin,
    children: [
      {
        path: 'admin',
        component: DashboardAdmin
      },
    ]
  }
]

export default route