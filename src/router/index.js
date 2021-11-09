import { createRouter, createWebHistory } from 'vue-router'
import Front from '../views/Front.vue'
import Login from '../views/Login.vue'

import zakatRoute from './zakatRoute.js'
import clonesproject from './clone/index.js'
import AdminPage from './adminpage/index.js'
import landingPage from './landingpage/index.js'
import DigitalScientiaRoute from './projects/digitascientia.js'
import myponyasia from './myponyasia/index.js'

const routes = [
  {
    path: '/',
    name: 'Front',
    component: Front
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  ...myponyasia,
  ...zakatRoute,
  ...clonesproject,
  ...landingPage,
  ...AdminPage,
  ...DigitalScientiaRoute,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Middleware in vue
router.beforeEach((to) => {
  // get meta data from route file
  if (to.meta.requiresToken) {
    // if 'token' not in localstorage
    if (!localStorage.getItem('token')) {
      // Redirect if not login
      return '/login?error=dare'
    }
  } 
})

export default router
