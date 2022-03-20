import React, {useState} from 'react'
import RegisterForm from '../RegisterForm/RegisterForm';

function Register() {

  const [user, setUser] = useState({name: '', email: ''});
  const [error, setError] = useState('');

  const Register = details => {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        username: details.username,
        email: details.email,
        password: details.password,
        age: details.age,
        city: details.city,
        country: details.country
      })
  };
  console.log(requestOptions);
  fetch('https://notalone-be.herokuapp.com/api/v1/users/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <RegisterForm Register={Register} error={error}/>
  )
}

export default Register;

