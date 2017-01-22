import React from 'react'

const Search = ({onClickClear, onChangeSearch, inputText}) => (
    <nav className="margin-bottom">
        <div className="nav-wrapper grey lighten-3">
            <form>
                <div className="input-field">
                    <input
                        type="search"
                        placeholder="Search"
                        className="grey-text text-darken-2"
                        onChange={onChangeSearch}
                        value={inputText}
                    />
                    <label htmlFor="search">
                        <i className="material-icons grey-text text-darken-2">search</i>
                    </label>
                    <i className="material-icons" onClick={onClickClear}>close</i>
                </div>
            </form>
        </div>
    </nav>
);

export default Search