import C from '../constants'

const initState = {
    page: C.PAGE_MAIN,
    pageArgs: {},
    searchText: "",
    listPage: 1,
};

const stateReducer = (state = initState, action) => {
    switch (action.type) {
        case C.SEARCH_INPUT_CHANGE: return setInputText(state, action.text);
        case C.SET_LIST_PAGE: return setListPage(state, action.listPage);
        case C.CHANGE_PAGE: return setPage(state, action.page, action.args);
        default: return state;
    }
};

export default stateReducer


function setInputText(state, searchText) {
    return Object.assign({}, state, {
        searchText,
    })
}

function setListPage(state, listPage) {
    return Object.assign({}, state, {
        listPage,
    })
}

function setPage(state, page, pageArgs) {
    return Object.assign({}, state, {
        page,
        pageArgs,
    })
}