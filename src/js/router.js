import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import PageList from './containers/PageList'
import PageDetail from './containers/PageDetail'
import App from './components/App.jsx'


const RouterHandler = () => (
    <Router history={browserHistory}>
        <Route path="/" component={App} >
            <IndexRoute component={PageList} title="Customers List" />
            <Route path="search/:search" component={PageList} title="Customers List" />
            <Route path="detail/:id" component={PageDetail} title="Customer Detail"/>
        </Route>
    </Router>
);

export default RouterHandler;