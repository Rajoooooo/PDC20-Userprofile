import React, { useState } from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import Form from './Form';
import './userprofile.css'; // Import the CSS file

function UserProfilePage() {
    const [userData, setUserData] = useState({
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        username: 'Juan',
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState,
            ...updatedInfo,
        }));
    };

    return (
        <div className="container">
            <Navigation />
            <div className="profile">
                <Profile user={userData} />
            </div>
            <Form user={userData} onUpdate={handleUpdate} />
        </div>
    );
}

export default UserProfilePage;