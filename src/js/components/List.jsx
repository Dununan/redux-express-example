import React from 'react'
import UserListItem from './UserListItem.jsx'

const List = ({usersList, onClick}) => (
    <div className="row">
        {usersList.users.map(user =>
            <UserListItem
                key={user.id}
                {...user}
                onClick={() => onClick(user)}
            />
        )}
    </div>
);

List.propTypes = {
    usersList: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired,
};

export default List