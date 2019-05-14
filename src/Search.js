import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: ''
        };
    }

    render() {
        return (
            <div className="search">
                <label className="search__label">Select group of users: </label>
                <select className="search__dropdown"></select>
            </div>
        );
    }
}

export default Search;