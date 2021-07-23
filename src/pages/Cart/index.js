import CartContainer from "./CartContainer";
import { CART, PAYMENT } from "../../navigation/CONSTANTS"
import Payment from "./components/payment";
import { Outlet } from 'react-router-dom'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const exportedObject = {
    path: CART,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    icon: <ShoppingCartIcon />,
    element: <Outlet />,
    children: [
        {
            path: '/',
            element: <CartContainer />
        },
        {

            path: PAYMENT,
            element: <Payment />,
            name: "Payment",
            visible: true
        },

    ],
    name: "Cart"
}

export default exportedObject