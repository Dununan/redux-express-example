import React from 'react'
import { browserHistory } from 'react-router'


class PageDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.init(this.props.params.id);
    }


    render() {
        let user = this.props.user;

        if (!user.id) {
            return <div>Loading...</div>;
        }

        return (
            <div className="container" >
                <div className="left-align margin-top" >
                    <a onClick={browserHistory.goBack} className="waves-effect waves-light btn grey darken-1"  >
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
    }
}

PageDetail.propTypes = {
    user: React.PropTypes.object.isRequired,
    userId: React.PropTypes.string.isRequired,
};

export default PageDetail