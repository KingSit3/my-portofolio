import RestoranAdmin from '../views/restoran/RestoranAdmin.vue'

import DashboardAdmin from '../components/restoran/admin/Dashboard.vue'

const route = [
  {
    name: 'restoranAdmin',
    component: RestoranAdmin,
    children: [
      {
        path: '/restoran/admin',
        component: DashboardAdmin
      },
    ]
  }
]

export default route