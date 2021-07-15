import { useState } from 'react'
import '../../assets/header.css'
import pages from '../../pages/index'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    const [currentTab, setCurrentTab] = useState('')
    return (

        <header className="header" >




            <ul className="header-nav">
                <li className={currentTab === 'home' ? "active" : ""}>
                    <Link to={"/"} onClick={() => setCurrentTab('home')} >
                        Home
                    </Link>


                </li>
                {pages.map((module) => (

                    module.name !== 'Cart' ?

                        <li
                            key={module.name}
                            className={currentTab === module.name ? "active" : ""}
                        >
                            <Link
                                to={module.routeProps.path}
                                onClick={() => setCurrentTab(module.name)}>
                                {module.name}
                            </Link>
                        </li>
                        :

                        <li className="absolute right-10" >
                            <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)} >
                                <ShoppingCartIcon ></ShoppingCartIcon>
                            </Link>
                        </li>


                ))}

            </ul>
        </header>

    )
}

export default Header
