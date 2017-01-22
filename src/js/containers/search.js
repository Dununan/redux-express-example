import { connect } from 'react-redux'
import { changeSearch, searchUsers, getUsers } from '../actions'
import SearchTemplate from '../components/Search.jsx'


let timeout = 0;

const mapStateToProps = (state) => {
    return {
        inputText: state.stateStore.searchText,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickClear: () => {
            dispatch(changeSearch(''));
            dispatch(getUsers(1));
        },
        onChangeSearch: (e) => {
            const value = e.target.value;
            dispatch(changeSearch(value));
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                if (value == '') {
                    dispatch(getUsers(1));
                } else {
                    dispatch(searchUsers(value, dispatch));
                }
            }, 600);
        },
    }
};

const SearchComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchTemplate);

export default SearchComponent