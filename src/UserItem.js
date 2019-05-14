import React from 'react';
import classNames from 'classnames';

function UserItem(props) {
    const { user, onSelectUser, selected } = props;
    return (
        <div className={classNames({"user": true, "selected": selected})} onClick={()=>onSelectUser(user)}>
            <img className="user__thumbnail" src={user.picture.thumbnail} alt="User thumbnail"/>
            <span className="user__username" >{user.name.first} {user.name.last}</span>
        </div>
    );
};


export default UserItem;