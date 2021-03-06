import React, {useState} from 'react'
import AuthService from '../../services/AuthService';
import {Alert, Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login({handleLogin, handleData}) {

  const [loginMessage, setLoginMessage] = useState("");
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  return (
    <Container className="d-flex vh-100 justify-content-center align-items-center">
      {loginMessage && 
        <Alert variant="danger">
          {loginMessage}
        </Alert>
      }
      <Form className="d-block" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formProfileEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProfilePassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
        </Form.Group>
        <Button className="w-100" type="submit">
            Login
        </Button>
        <Link className="d-block mt-3 btn btn-secondary" to="/reset-password">Reset password</Link>  
      </Form>  
    </Container>
  )
}

export default Login;
