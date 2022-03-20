import React, {useState} from 'react'
import './LoginForm.css'

function LoginForm({Login, error}) {
    const [details, setDetails] = useState({email: '', password: ''})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
  return (
    <div className='main-login'>
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
        </form>
      </div>
    </div>
  )
}

export default LoginForm;
