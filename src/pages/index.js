import Products from './Products'
import Categories from './Categories'
import Cart from './Cart'
import Home from './Home'
import NotFound from 'navigation/NotFound'
const Pages = [
    Home,
    Categories,
    Products,
    Cart,
    { path: '*', element: <NotFound /> }
]

export default Pages