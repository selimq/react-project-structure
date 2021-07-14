import { useState } from 'react'
import '../../assets/header.css'
import logo from '../../logo.svg'
import pages from '../../pages/index'
import { Link } from 'react-router-dom'

const Header = () => {
    const [currentTab, setCurrentTab] = useState('')
    return (

        <header className="header" >


            < img src={logo} className="header-logo" alt="logo" />


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
        </header>

    )
}

export default Header
