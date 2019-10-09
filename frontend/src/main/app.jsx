import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import { HashRouter } from 'react-router-dom'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    <HashRouter>
        <div className='container'>
            <Menu />
            <Routes />
        </div>
    </HashRouter>
)