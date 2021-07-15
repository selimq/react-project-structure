import CartContainer from "./CartContainer";
import { CART } from "../../navigation/CONSTANTS"



const exportedObject = {
    routeProps: {
        path: CART,
        component: CartContainer
    },
    name: "Cart"
}

export default exportedObject