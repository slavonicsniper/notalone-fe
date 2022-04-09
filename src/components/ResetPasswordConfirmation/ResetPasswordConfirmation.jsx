import React, {useState, useEffect} from 'react'
import AuthService from '../../services/AuthService';
import {Alert, Container, Form, Button} from 'react-bootstrap'
import { useParams } from "react-router-dom";

function ResetPasswordConfirmation() {
    let params = useParams();
    const initialResponse = { message: '', alertVariant: '' };
    const [password, setPassword] = useState('')
    const [response, setResponse] = useState(initialResponse);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await AuthService.verifyPasswordReset(params.confirmationCode, {password}) 
            console.log(res)
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
                {response.message && 
                <Alert variant={response.alertVariant}>
                    {response.message}
                </Alert>
                }
                <Form onSubmit={handleSubmit}>
                    <h1>Enter new password</h1>
                    <Form.Group className="mb-3" controlId="formProfileEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formProfilePassword">
                    <Form.Label>Confirm password</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button type="submit">
                        Reset password
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default ResetPasswordConfirmation;
