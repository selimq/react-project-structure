import HomeContainer from "./HomeContainer";
import { HOME } from "../../navigation/CONSTANTS"

const exportedObject = {
    routeProps: {
        path: HOME,
        component: HomeContainer
    },
    name: 'Home'
}
export default exportedObject