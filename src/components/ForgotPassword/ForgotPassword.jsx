import React, {useState} from 'react'
import AuthService from '../../services/AuthService';
import './ForgotPassword.css';

function ForgotPassword() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [details, setDetails] = useState({email: ''})
  
  const submitHandler = (e) => {
    e.preventDefault();
  
    setMessage("");
    setLoading(true);
  
    AuthService.login(details).then((response) => {
      if(response.hasOwnProperty('message')){
        setMessage(response.message);
        setColor('green');
        setLoggedIn(true);
      } else {
        setMessage(response.error);
        setColor('red');
      }
    });
    setLoading(false);
  }

  return (
    <div className='main-login'>
      <div className='main-box'>
        <form onSubmit={submitHandler}>
        <h2>Please enter your email</h2>
        <label htmlFor='reset-password-email'>Email</label>
          <input 
              type='email' 
              id='reset-password-email'
          />
          <button type='submit' className='submit-button'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword;

