import HomeContainer from "./HomeContainer";
import { HOME } from "../../navigation/CONSTANTS"

import { Outlet } from 'react-router-dom'

const exportedObject = {
    path: HOME,
    name: "Home",
    element: <HomeContainer />,


}

export default exportedObject