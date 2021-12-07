import ZakatAdmin from '../views/zakat/ZakatAdmin.vue'
  import FitrahAdmin from '../components/zakat/admin/ZakatFitrahContent.vue'
  import MalAdmin from '../components/zakat/admin/ZakatMalContent.vue'
  import InfaqAdmin from '../components/zakat/admin/InfaqContent.vue'
  import Mustahik from '../components/zakat/admin/MustahikContent.vue'
  import MustahikDetail from '../components/zakat/admin/MustahikDetail.vue'
  import Dashboard from '../components/zakat/admin/Dashboard.vue'
  import TransaksiZakat from '../components/zakat/admin/TransaksiZakat.vue'
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
        path: '',
        name: 'dashboard',
        component: Dashboard,
        meta: { requiresToken: true }
      },
      {
        path: 'fitrah',
        name: 'fitrah',
        component: FitrahAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mal',
        name: 'mal',
        component: MalAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'infaq',
        name: 'infaq',
        component: InfaqAdmin,
        meta: { requiresToken: true }
      },
      {
        path: 'mustahik',
        name: 'mustahik',
        component: Mustahik,
        meta: { requiresToken: true }
      },
      {
        path: 'mustahik/:id',
        name: 'mustahikDetail',
        component: MustahikDetail,
        meta: { requiresToken: true }
      },
      {
        path: 'transaksi/zakat',
        name: 'transaksiZakat',
        component: TransaksiZakat,
        meta: { requiresToken: true }
      },
      {
        path: 'admins',
        name: 'admins',
        component: Admins,
        meta: { requiresToken: true }
      },
    ]
  },
  // End Zakat Page Links
]

export default route