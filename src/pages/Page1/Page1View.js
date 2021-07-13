import React from 'react'
import PropTypes from 'prop-types'

const Page1View = props => {

    return (
        <div>
            <h1 variant="h2">{props.title}</h1>
        </div>
    )
}

Page1View.propTypes = {
    title: PropTypes.string.isRequired
}

export default Page1View
