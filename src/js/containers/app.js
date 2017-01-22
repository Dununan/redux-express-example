import React from 'react'
import { connect } from 'react-redux'
import { goToMainPage } from '../actions'
import SimpleRouter from '../router'
import App from '../components/App.jsx'


const mapStateToProps = (state) => {
    return SimpleRouter(state.stateStore.page)
};

const mapDispatchToProps = (dispatch) => {
    return {
        windowEvents: () => {
            window.onpopstate = function(e) {
                // TODO: make better handling
                if (window.location.pathname == '/') {
                    dispatch(goToMainPage());
                }
            };
        }
    }
};

const AppComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppComponent