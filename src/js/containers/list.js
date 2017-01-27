import { connect } from 'react-redux'
import { goToDetailPage } from '../actions'
import ListTemplate from '../components/List.jsx'


const mapStateToProps = (state) => {
    return {
        usersList: state.usersStore,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (item) => {
            dispatch(goToDetailPage(item));
        }
    }
};

const ListComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTemplate);

export default ListComponent