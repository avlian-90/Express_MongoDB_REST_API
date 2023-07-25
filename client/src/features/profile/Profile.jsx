import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { profileAsync } from './profileSlice';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.profile)

    useEffect(() => {
        dispatch(profileAsync())
    })

    const logOut = () => {
        localStorage.removeItem("access-token");
        navigate("/login");
    }

    return (
        <div className="container">
            <h1>Welcome {user}</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
        
    )
}

export default Profile;