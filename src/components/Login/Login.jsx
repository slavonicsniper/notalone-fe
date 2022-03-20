import React, {useState} from 'react'
import LoginForm from '../LoginForm/LoginForm';

function Login() {

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Login = details => {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: details.email,
        password: details.password 
      })
  };
  fetch('https://notalone-be.herokuapp.com/api/v1/users/login', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <LoginForm Login={Login} error={error}/>
  )
}

export default Login;

