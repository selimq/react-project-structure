import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const HomeView = props => {

    return (
        <div>
            <h1 variant="h2">{props.title}</h1>
        </div>
    )

}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
