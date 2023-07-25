import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserName, setUserEmail, setUserPassword, resetForm, registerAsync } from './registerSlice';
import './Register.css';

const Register = () => {

    const dispatch = useDispatch();
    const {user} = useSelector(state => state.register)
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await dispatch(registerAsync(user)); 
          dispatch(resetForm());
          navigate("/login"); 
        } catch (error) {
          console.error('Error during registration:', error);
        }
    };

    const handleLoginClick = () => {
      window.FB.login(
        function(response) {
          if (response.authResponse) {
            console.log('Logged in with Facebook. Access token:', response.authResponse.accessToken);
          } else {
            console.log('Facebook login canceled or not granted.');
          }
        },
        { scope: 'email' } 
      );
    };

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="username" placeholder="Username" value={user.username} onChange={(e) => dispatch(setUserName(e.target.value))} />
                <input type="email" placeholder="Email" value={user.email} onChange={(e) => dispatch(setUserEmail(e.target.value))} />
                <input type="password" placeholder="Password" value={user.password} onChange={(e) => dispatch(setUserPassword(e.target.value))} />
                <div className="buttons">
                  <button type="submit">Register</button>
                  <button className="fb" onClick={handleLoginClick}>Login with Facebook</button>
                </div>
            </form>
        </main>
    )
}

export default Register;