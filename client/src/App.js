import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate("/login");
  }
  const goToRegisterPage = () => {
    navigate("/register")
  }
  return (
    <div className="App">
       <button onClick={goToLoginPage}>Login</button>
       <button onClick={goToRegisterPage}>Register</button>
    </div>
  );
}

export default App;
