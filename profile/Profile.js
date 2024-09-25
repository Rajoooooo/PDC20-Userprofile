import React from 'react';
import PropTypes from 'prop-types';

function Profile({user: {name,email, username}}){
    return(
        <div>
            <h2>{name}</h2>
            <p>{username}</p>
            <p>{email}</p>
        </div>

    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired
};
export default Profile;