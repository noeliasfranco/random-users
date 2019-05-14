import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class UserItem extends React.Component {
    static propTypes = {
        user: PropTypes.object,
        onSelectUser: PropTypes.func,
        selected: PropTypes.bool
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { user, onSelectUser, selected } = this.props;
        return (
            <div className={classNames({"user": true, "selected": selected})} onClick={()=>onSelectUser(user)}>
                <img className="user__thumbnail" src={user.picture.thumbnail} alt="User thumbnail"/>
                <span className="user__username" >{user.name.first} {user.name.last}</span>
            </div>
        );
    }
}

export default UserItem;