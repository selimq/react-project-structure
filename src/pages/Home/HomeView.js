import React from 'react'
import PropTypes from 'prop-types'
import { MenuList, Paper, MenuItem, Grid } from '@material-ui/core'
import '../../assets/home.css'

const HomeView = (props) => {

    return (
        <div className="home" >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Paper elevation={4} className="home-paper">

                        <MenuList >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem>My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </MenuList>
                    </Paper>
                </Grid>


            </Grid>

        </div>
    )

}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
