import React, {useState} from 'react'
import './RegisterForm.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function RegisterForm({Register, error}) {
  const [details, setDetails] = useState({username: '', email: '', password: '', age: '', city: '', country: ''})

  const formSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .required('Email is required')
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password length should be at least 6 characters'),
    passwordConfirm: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords do not match'),
    age: Yup.string()
      .matches(/^[1-9]$|^[1-9][0-9]$|^(100)$/, 'Invalid age'),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    Register(details);
  };

  return (
    <div className='main-login'>
      <div className='main-box'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h3>Register</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor='username'>Username</label>
              <input 
                type='username' 
                id='username'
                {...register('username')}
                className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                onChange={e => setDetails({...details, username: e.target.value})}
                value={details.username}
              />
              <div className="invalid-feedback">
                {errors.username?.message}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='email_one'>Email</label>
              <input 
                type='string' 
                id='email_one'
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                onChange={e => setDetails({...details, email: e.target.value})}
                value={details.email}
              />
              <div className="invalid-feedback">
                {errors.email?.message}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='password-one'>Password</label>
              <input 
                type='password' 
                id='password-one'
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                onChange={e => setDetails({...details, password: e.target.value})}
                value={details.password}
              />
              <div className="invalid-feedback">
                {errors.password?.message}
              </div>
            </div>    
            <div className="form-group">
              <label htmlFor='password-confirm'>Confirm password</label>
              <input 
                type='password' 
                id='password-confirm'
                {...register('passwordConfirm')}
                className={`form-control ${errors.passwordConfirm ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">
                {errors.passwordConfirm?.message}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='age'>Age</label>
              <input 
                id='age'
                {...register('age')}
                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                onChange={e => setDetails({...details, age: e.target.value})}
                value={details.age}
              />
              <div className="invalid-feedback">
                {errors.age?.message}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor='city'>City</label>
              <input 
                id='city'
                onChange={e => setDetails({...details, city: e.target.value})}
                value={details.city}
              />
            </div>
            <div className="form-group">
              <label htmlFor='country'>Country</label>
              <input 
                id='country'
                onChange={e => setDetails({...details, country: e.target.value})}
                value={details.country}
              />
            </div>
            <button type='submit' className='submit-button'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm;