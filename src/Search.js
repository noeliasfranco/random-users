import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
    static propTypes = {
        onFilterChange: PropTypes.func
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedFilter: ''
        };
    }

    onFilterChange(e) {
        this.setState({selectedFilter: e.target.value});
        this.props.onFilterChange(e.target.value);
    }

    render() {
        const { selectedFilter } = this.state;

        return (
            <div className="search">
                <label className="search__label">Select group of users: </label>
                <select className="search__dropdown" onChange={(e)=> this.onFilterChange(e)} value={selectedFilter}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
        );
    }
}

export default Search;