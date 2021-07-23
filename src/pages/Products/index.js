import ProductsContainer from "./ProductsContainer";
import { PRODUCTS } from '../../navigation/CONSTANTS'
import Product from "./components/Product";
import { Outlet } from 'react-router-dom'

const exportedObject = {
    path: PRODUCTS,
    element: <Outlet />,
    children: [
        {
            path: '/', element: <ProductsContainer />
        },
        {
            visible: false, path: ':name', element: <Product />
        }
    ]
    ,
    name: 'Products'
}
export default exportedObject