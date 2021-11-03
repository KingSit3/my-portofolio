import ZakatAdmin from '../views/zakat/ZakatAdmin.vue'
  import FitrahAdmin from '../components/zakat/admin/ZakatFitrahContent.vue'
  import MalAdmin from '../components/zakat/admin/ZakatMalContent.vue'
  import InfaqAdmin from '../components/zakat/admin/InfaqContent.vue'
  import Mustahik from '../components/zakat/admin/MustahikContent.vue'
  import Dashboard from '../components/zakat/admin/Dashboard.vue'
  import Admins from '../components/zakat/admin/Admins.vue'

import zakatCalculate from '../views/zakat/ZakatCalculate.vue'

const route = [
  // Zakat Page Links
  {
    path: '/calculate',
    name: 'zakatCalculate',
    component: zakatCalculate,
    meta: { requiresToken: true }
  },
  {
    path: '/zakatadmin',
    name: 'ZakatAdmin',
    component: ZakatAdmin,
    meta: { requiresToken: true },
    children: [
      {
        path: '/zakatadmin',
        component: Dashboard,
        meta: { requiresToken: true }
      },
      {
        path: 'fitrah',
        component: FitrahAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mal',
        component: MalAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'infaq',
        component: InfaqAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mustahik',
        component: Mustahik,
        meta: { requiresToken: true }
      },
      {
        path: 'admins',
        component: Admins,
        meta: { requiresToken: true }
      },
    ]
  },
  // End Zakat Page Links
]

export default route