import React from 'react'

const Header = ({title}) => (
    <nav>
        <div className="nav-wrapper container">
            <a className="brand-logo">{title}</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                    <a href="https://github.com/Dununan/redux-express-example" target="blank" >
                        Fork me on GitHub
                    </a>
                </li>
            </ul>
        </div>
    </nav>
);

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default Header