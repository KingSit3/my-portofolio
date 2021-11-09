import Spotifiru from '../../views/clone/Spoifiru2021.vue'
import Netfliksu from '../../views/clone/Netfliksu2021.vue'

const router = [
  {
    path: '/spotifiru2021',
    name: 'Spotifiru',
    component: Spotifiru,
  },
  {
    path: '/netfliksu2021',
    name: 'Netfliksu',
    component: Netfliksu,
  },
]

export default router