import MPASwitcher from '@/views/myponyasia/Switcher.vue'

// Pony Routes
import PonyHome from '@/views/myponyasia/pony/Home.vue'

// Anime Routes
import AnimeHome from '@/views/myponyasia/anime/Home.vue'
import AnimeAnime from '@/views/myponyasia/anime/Anime.vue'
import AnimeAnime2 from '@/views/myponyasia/anime/Anime2.vue'
import AnimeStreaming from '@/views/myponyasia/anime/Streaming.vue'
import AnimeStreaming2 from '@/views/myponyasia/anime/Streaming2.vue'
import AnimeFind from '@/views/myponyasia/anime/Find.vue'
import AnimeFindBy from '@/views/myponyasia/anime/FindBy.vue'
import AnimeAbout from '@/views/myponyasia/anime/About.vue'
import AnimePrivacyPolicy from '@/views/myponyasia/anime/PrivacyPolicy.vue'

const mpaRoute = [
  {
    path: '/mpa/switcher',
    name: 'MPASwitcher',
    component: MPASwitcher
  },
]

const ponyroute = [
  {
    path: '/mpa/pony/home',
    name: 'PonyHome',
    component: PonyHome
  },
]

const animeroute = [
  {
    path: '/mpa/anime/home',
    name: 'AnimeHome',
    component: AnimeHome
  },
  {
    path: '/mpa/anime2',
    name: 'AnimeAnime2',
    component: AnimeAnime2
  },
  {
    path: '/mpa/anime',
    name: 'AnimeAnime',
    component: AnimeAnime
  },
  {
    path: '/mpa/anime/streaming',
    name: 'AnimeStreaming',
    component: AnimeStreaming
  },
  {
    path: '/mpa/anime/streaming2',
    name: 'AnimeStreaming2',
    component: AnimeStreaming2
  },
  {
    path: '/mpa/anime/Find',
    name: 'AnimeFind',
    component: AnimeFind
  },
  {
    path: '/mpa/anime/:findBy/:id',
    name: 'AnimeFindBy',
    component: AnimeFindBy,
  },
  {
    path: '/mpa/anime/about',
    name: 'AnimeAbout',
    component: AnimeAbout,
  },
  {
    path: '/mpa/anime/policy',
    name: 'AnimePrivacyPolicy',
    component: AnimePrivacyPolicy,
  },
]

export default [ ...mpaRoute, ...ponyroute, ...animeroute]