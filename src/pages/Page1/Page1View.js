import {
    React,
    useState
} from 'react'
import PropTypes from 'prop-types'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import '../../assets/page1view.css'
import { Link } from 'react-router-dom';
import routes from './navigation/routes'
const Page1View = props => {
    const [currentTab, setCurrentTab] = useState('')

    return (
        <div className="main">

            <List className="main-list" >
                {routes.map((route, index) => (
                    <ListItem button key={route.name} onClick={() => {

                    }}>
                        <ListItemIcon> <HourglassEmptyIcon /></ListItemIcon>
                        <ListItemText primary={route.name} />
                    </ListItem>
                ))}
            </List>
            <ul >
                {routes.map((module) => (
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
        </div>
    )
}

Page1View.propTypes = {
    title: PropTypes.string.isRequired
}

export default Page1View

