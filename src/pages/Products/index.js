import ProductsContainer from "./ProductsContainer";
import { PRODUCTS } from '../../navigation/CONSTANTS'
const exportedObject = {
    routeProps: {
        path: PRODUCTS,
        component: ProductsContainer
    },
    name: 'Products'
}
export default exportedObject