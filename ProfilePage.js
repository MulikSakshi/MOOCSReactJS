// src/ProfilePage.js
import React from 'react';
import ProfilePicture from './ProfilePicture';
import ProfileDetails from './ProfileDetails';

const ProfilePage = () => {
    const user = {
        profilePicture: 'https://via.placeholder.com/150', // Replace with your image URL
        name: 'Sakshi Mulik',
        email: 'sakshimulik8964@gmail.com',
        bio: 'A passionate developer with interests in React and Web Technologies.'
    };

    return (
        <div className="profile-page">
            <ProfilePicture imageUrl="picture.jpg" />
            <ProfileDetails name={user.name} email={user.email} bio={user.bio} />
        </div>
    );      
};

export default ProfilePage;