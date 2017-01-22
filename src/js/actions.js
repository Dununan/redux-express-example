import fetch from 'isomorphic-fetch'
import C from './constants'

export const changeSearch = (text) => {
    return {
        type: C.SEARCH_INPUT_CHANGE,
        text,
    }
};

export const setListPage = (listPage) => {
    return {
        type: C.SET_LIST_PAGE,
        listPage,
    }
};

export const searchUsers = (text) => {
    return dispatch => {
        fetch(`/api/search/${text}`)
            .then(response => response.json())
            .then(json => dispatch(setUsersList(json)))
    }
};

export const getUsers = (page) => {
    return dispatch => {
        if (page === 1) {
            dispatch(emptyUsersList());
        }
        fetch(`/api/newest/${page}`)
            .then(response => response.json())
            .then(json => dispatch(addToUsersList(json)))
    }
};

export const goToDetailPage = (item) => {
  return {
      type: C.CHANGE_PAGE,
      page: C.PAGE_DETAIL,
      args: {item},
  }
};

export const goToMainPage = () => {
    return {
        type: C.CHANGE_PAGE,
        page: C.PAGE_MAIN,
        args: {},
    }
};


function setUsersList(list) {
    return {
        type: C.SET_USERS_LIST,
        list,
    }
}

function addToUsersList(list) {
    return {
        type: C.ADD_TO_USERS_LIST,
        list,
    }
}

function emptyUsersList() {
    return {
        type: C.EMPTY_USERS_LIST,
    }
}