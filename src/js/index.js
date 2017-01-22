import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import AppStore from './reducer'
import App from './containers/App'

render(
    <Provider store={AppStore}>
        <App />
    </Provider>,
    document.getElementById('reactjs-wrapper')
);