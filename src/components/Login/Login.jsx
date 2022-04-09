import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import AuthService from '../../services/AuthService';
import {Alert, Container, Form, Button} from 'react-bootstrap'

function Login({handleLogin, handleData}) {

  const [loginMessage, setLoginMessage] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); 

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        const response = await AuthService.login({email, password})
        if(response.status === 'Success'){
          handleData(response.data)
          handleLogin(true)
        } else {
          setLoginMessage(response.message);
        }          
    } catch(err) {
        console.log(err)
        setLoginMessage(err);
    }
  }

  const redirect = () =>{ 
    navigate('/reset-password');
  }

  return (
    <Container>
      <br></br>
      {loginMessage && 
        <Alert variant="danger">
          {loginMessage}
        </Alert>
      }
      <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formProfileEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProfilePassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button type="submit">
            Login
        </Button>
      </Form>
      <br></br>
      <Button variant="secondary" type="submit" onClick={redirect}>
        Reset password
      </Button>
    </Container>
  )
}

export default Login;
