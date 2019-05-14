import React from 'react';
import axios from 'axios';
import Search from './Search';
import UserItem from './UserItem';
import UserCard from './UserCard';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            selectedUser: null,
            selectedFilter: ""
        };
        this.onSelectUser = this.onSelectUser.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
        this.filterUsers = this.filterUsers.bind(this);
    }

    componentDidMount() {
        let that = this;

        axios.get('https://randomuser.me/api/?results=20')
            .then(function(response) {
                let users = response.data.results;
                if(users && users.length > 0) {
                    that.setState({users});
                }
            })
            .catch((error) => {
               alert("There was an error trying to get the list of users from randomuser.me");
            });
    }

    renderUserItem(user, key) {
        const { selectedUser } = this.state;

        return (
            <UserItem
                key={key}
                user={user}
                onSelectUser={this.onSelectUser}
                selected={selectedUser && selectedUser.email && selectedUser.email===user.email}
            />
        );
    }

    onSelectUser(user) {
        this.setState({selectedUser: user});
    }

    onFilterChange(filter) {
        this.setState({selectedFilter: filter, selectedUser: null});
    }

    filterUsers(filter) {
        const { users } = this.state;
        let filterUsers = users.filter(function(data) {
            return (data.gender === filter);
        });

        return filterUsers.map((data, key)=> this.renderUserItem(data, key));
    }

    render() {
        const { users, selectedUser, selectedFilter } = this.state;

        return (
            <div>
                <div className="users">
                    <header className="users__header">
                        <p className="users__header title">Users</p>
                        <span className="users__header subtitle">If you want to get contact information to specific user, just select group and then select him from the list below</span>
                    </header>
                    <Search onFilterChange={this.onFilterChange}/>
                    <div className="results">
                        {
                            selectedFilter?
                                this.filterUsers(selectedFilter)
                            :
                                users.map((data, key)=> this.renderUserItem(data, key))
                        }
                    </div>
                </div>
                {
                    selectedUser &&
                        <UserCard data={selectedUser}/>
                }
            </div>
        );
    }
}

export default App;
