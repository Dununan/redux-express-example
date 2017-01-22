import React from 'react'
import { connect } from 'react-redux'
import PageList from '../components/PageList.jsx'
import {getUsers, setListPage} from '../actions'


const mapStateToProps = (state) => {
    return {
        count: state.dataStore.count,
        visible: state.dataStore.visible,
        page: state.stateStore.listPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            dispatch(getUsers(1))
        },
        loadMore: (page) => {
            dispatch(setListPage(page));
            dispatch(getUsers(page));
        }
    }
};

const PageListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(PageList);

export default PageListComponent