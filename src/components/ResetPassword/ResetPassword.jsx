import React, {useState} from 'react'
import AuthService from '../../services/AuthService';
import {Alert, Container, Form, Button} from 'react-bootstrap'

function ResetPassword() {
  const initialResponse = { message: '', alertVariant: '' };
  const [response, setResponse] = useState(initialResponse);
  const [email, setEmail] = useState('')

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await AuthService.initializePasswordReset({email}) 
      if(res.status === 'Success'){
        setResponse(response => ({...response, message: res.message, alertVariant: 'success'}));
      } else{
        setResponse(response => ({...response, message: res.message, alertVariant: 'danger'}));
      }
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div>
      <br></br>
        <Container>   
        <Form onSubmit={handleSubmit}>
          <h1>Reset password</h1>
          <Form.Group className="mb-3" controlId="formProfileEmail">
            <Form.Label>Enter your email</Form.Label>
            <Form.Control type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
          {response.message && 
          <Alert variant={response.alertVariant}>
            {response.message}
          </Alert>
          }
          <Button type="submit">
              Reset password
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default ResetPassword;

