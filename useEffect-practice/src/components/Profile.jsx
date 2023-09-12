import { React } from 'react'

const Profile = ({ user, profilePic }) => {
    return (
        <>
            <h1>Hello: {user}</h1>  
            <img src={profilePic} alt="profile pic"/>
        </>
    );
}

export default Profile
