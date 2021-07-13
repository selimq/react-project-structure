import React from 'react'
import PropTypes from 'prop-types'
import { PAGE1, ROOT } from 'navigation/CONSTANTS'
import { useHistory } from 'react-router-dom'

const Page1View = props => {
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }
    return (
        <div>
            <h1 variant="h2">Page1View {props.title}</h1>
            <button onClick={() => goTo(ROOT)}>ROOT </button>
        </div>
    )
}

Page1View.propTypes = {
    title: PropTypes.string.isRequired
}

export default Page1View
