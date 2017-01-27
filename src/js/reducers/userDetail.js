import C from '../constants'

const detailReducer = (state = {}, action) => {
    switch (action.type) {
        case C.SET_USER_DETAIL: return action.data;
        default:
            return state;
    }
};

export default detailReducer
