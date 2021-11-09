import AdminPage1 from '../../views/adminpage/AdminPage1.vue'
import AdminPage2 from '../../views/adminpage/AdminPage2.vue'
import AdminPage3 from '../../views/adminpage/AdminPage3.vue'
import AdminPage4 from '../../views/adminpage/AdminPage4.vue'

const route = [
  {
    path: '/adminpage1',
    name: 'AdminPage1',
    component: AdminPage1,
  },
  {
    path: '/adminpage2',
    name: 'AdminPage2',
    component: AdminPage2,
  },
  {
    path: '/adminpage3',
    name: 'AdminPage3',
    component: AdminPage3,
  },
  {
    path: '/adminpage4',
    name: 'AdminPage4',
    component: AdminPage4,
  },
]

export default route