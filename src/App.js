import "./App.css";
import React from 'react'
import NotFound from './navigation/NotFound'
import pages from './pages/index'
import Home from './pages/Home'

import Header from "./parts/header/index";
import { useRoutes } from "react-router-dom";
import RouterConfig from "./navigation/RouterConfig";
function App() {


    let element = useRoutes(RouterConfig())
    return element

}

export default App;
