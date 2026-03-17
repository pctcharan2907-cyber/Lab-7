import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/contact');
  };

  return (
    <div className="page">
      <h1>Login Required</h1>
      <p>You need to be logged in to access the contact page.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;