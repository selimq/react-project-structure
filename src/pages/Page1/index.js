import Page1Container from "./Page1Container";
import { PAGE1 } from "../../navigation/CONSTANTS"

const exportedObject = {
    routeProps: {
        path: PAGE1,
        component: Page1Container,
    },
    name: 'Page1'
}

export default (exportedObject);