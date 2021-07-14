import React from 'react'
import PropTypes from 'prop-types'
import { MenuList, Paper, MenuItem } from '@material-ui/core'
import '../../assets/home.css'
const HomeView = (props) => {

    return (
        <div className="home" >
            <Paper elevation={4} className="home-paper">
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </MenuList>
            </Paper>
        </div>
    )

}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
