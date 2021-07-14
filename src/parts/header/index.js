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
                <li>
                    <Link to={"/"} onClick={() => setCurrentTab('home')} >
                        Home
                    </Link>


                </li>
                {pages.map((module) => (

                    <li
                        key={module.name}
                        className={currentTab === module.name ? "active" : ""}
                    >
                        <Link
                            to={module.routeProps.path}
                            onClick={() => setCurrentTab(module.name)}
                        >
                            {module.name}
                        </Link>
                    </li>
                ))}

            </ul>
            <ShoppingCartIcon className=" absolute right-10"></ShoppingCartIcon>
        </header>

    )
}

export default Header
