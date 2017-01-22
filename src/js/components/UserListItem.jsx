import React from 'react'

const UserListItem = ({name, picture, onClick}) => (
    <div className="col s12 m4 l3">
        <div className="card hoverable pointer" onClick={onClick}>
            <div className="card-image">
                <img src={picture} />
            </div>
            <div className="card-content">
                <p>{name}</p>
            </div>
        </div>
    </div>
);

export default UserListItem