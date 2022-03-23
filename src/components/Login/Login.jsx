import React, {useState} from 'react'
import AuthService from '../../services/AuthService';
import { Navigate } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Login.css'

function Login() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [details, setDetails] = useState({email: '', password: ''})

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
      {/* {loggedIn ? <Navigate to='/'/> : <Dashboard/>} */}
      <div className='main-box'>
        <form onSubmit={submitHandler}>
        
          <h3>Login</h3>
          <label htmlFor='email-one'>Email</label>
          <input 
              type='email' 
              id='email-one'
              onChange={e => setDetails({...details, email: e.target.value})}
              value={details.email}
          />
          <label htmlFor='password-one'>Password</label>
          <input 
              type='password' 
              id='password-one'
              onChange={e => setDetails({...details, password: e.target.value})}
              value={details.password}
          />
          <label htmlFor='forgot-password'>
            <a href='/forgotPassword'>I forgot my password</a>
          </label>
          <button type='submit' className='submit-button'>Log in</button>
          {message.length > 0 &&
            <div className={'alert ' + color}>
              {message}
            </div>
          }
        </form>
      </div>
    </div>
  )
}

export default Login;
