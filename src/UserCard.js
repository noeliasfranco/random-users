import React from 'react';


function UserCard(props) {
    let { data } = props;
    let customStyles = {
        backgroundImage: 'url('+data.picture.large+')'
    };

    return (
        <div className="card">
            <div className="card__bg-image" style={customStyles}></div>
            <div className="card__header">
                <img src={data.picture.thumbnail} alt="User thumbnail"/>
                <span className="name">{data.name.first} {data.name.last}</span>
            </div>
            <div className="card__data">
                <div>
                    <label>Email Address</label>
                    <span>{data.email}</span>
                </div>
                <div>
                    <label>Phone Number</label>
                    <span>{data.phone}</span>
                </div>
                <div>
                    <label>Location</label>
                    <span>{data.location.street}, {data.location.city}, {data.location.state}</span>
                </div>
            </div>
        </div>
    );
}

export default UserCard;