import React from 'react'
import PropTypes from 'prop-types'
import { PAGE1, ROOT } from 'navigation/CONSTANTS'
import { useHistory } from 'react-router-dom'

const HomeView = props => {
    const history = useHistory();
    const goTo = (path) => {
        history.push(path || ROOT);
    }
    return (
        <div>
            <h1 variant="h2">HomeView {" "}</h1>
            <button onClick={() => goTo(PAGE1)}>Dashboard</button>
        </div>
    )

}

HomeView.propTypes = {
    title: PropTypes.string.isRequired
}

export default HomeView
