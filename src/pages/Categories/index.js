import CategoriesContainer from "./CategoriesContainer";
import { CATEGORIES, TEST, TEST1 } from "../../navigation/CONSTANTS"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import ProductsContainer from "pages/Products/ProductsContainer";
import TESTCOMP from './TEST'

const exportedObject = {
    path: CATEGORIES,
    element: <CategoriesContainer />,
    iconClosed: <ExpandMoreIcon />,
    iconOpened: <ExpandLessIcon />,
    icon: <ShoppingCartIcon />,
    children: [
        {

            name: "Test",
            path: TEST,
            element: <CategoriesContainer
            />,

            icon: <CategoryRoundedIcon />,
        },
        {
            name: "Test1",
            path: TEST1,
            element: <CategoriesContainer
            />,

            icon: <CategoryRoundedIcon />,
        },
    ],
    name: "Categories"
}

export default exportedObject