import Page11Container from '../pages/Page11/Page11Container'
import Page12Container from '../pages/Page12/Page12Container'
import { Page11, Page12 } from './CONSTANTS'
const routes = [

    {
        routeProps: {
            path: Page11,
            component: Page11Container
        },
        name: "Page11"
    },
    {
        routeProps: {
            path: Page12,
            render: Page12Container
        },
        name: "Page12"
    },

]
export default routes