import React from 'react'
import pages from '../pages/index'

import Header from 'parts/header';
const RouterConfig = () => {

    let element = [
        {
            path: '/', element: <Header />, children: pages
        }
    ]
    return element

}

export default RouterConfig