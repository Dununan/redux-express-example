import React from 'react'

const PageDetail = ({user, onBack}) => (
    <div className="container" >
        <div className="left-align margin-top" >
            <a className="waves-effect waves-light btn grey darken-1" onClick={onBack} >
                <i className="material-icons left">arrow_back</i> Back
            </a>
        </div>
        <div className="row" >
            <div className="col s12">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={user.picture} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content left-align">
                            <h4 style={{ marginTop: '0px'}}>{user.name}</h4>
                            <div className="col s12" >
                                <ul className="collection">
                                    <li className="collection-item">Age: {user.age}</li>
                                    <li className="collection-item">Eye Color: {user.eyeColor}</li>
                                    <li className="collection-item">Gender: {user.gender}</li>
                                    <li className="collection-item">Favorite Fruit: {user.favoriteFruit}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

PageDetail.propTypes = {
    user: React.PropTypes.object.isRequired,
    onBack: React.PropTypes.func.isRequired,
};

export default PageDetail