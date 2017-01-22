import React from 'react'
import Header from './Header.jsx'


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.windowEvents();
    }

    render() {
        return (
            <div>
                <Header title={this.props.title} />
                <div className="center-align">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.any.isRequired,
    windowEvents: React.PropTypes.func.isRequired,
};

export default App