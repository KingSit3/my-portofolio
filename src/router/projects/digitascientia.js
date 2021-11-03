import Digitascientia from '@/views/projects/Digitascientia.vue'
import LandingPage from '../../components/projects/digitascientia/Home.vue'

const route = [
    {
        path: '/digitascientia',
        name: 'landingPage',
        component: Digitascientia,
        children: [
            {
                path: '',
                name: 'landingPage',
                component: LandingPage,
            }
        ]
    }
]

export default route