import React from 'react'
import { connect } from 'react-redux'
import PageDetail from '../components/PageDetail.jsx'
import {goToMainPage} from '../actions'


const mapStateToProps = (state) => {
    return {
        user: state.stateStore.pageArgs.item,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBack: () => {
            dispatch(goToMainPage());
        }
    }
};

const PageDetailComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageDetail);

export default PageDetailComponent