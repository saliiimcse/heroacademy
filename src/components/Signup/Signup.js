import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const Signup = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const handleForm= (event) =>{
        event.preventDefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;

        // console.log(email, name, password);
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result);
            setSuccess(true);
            form.reset();
        })
        .catch(error =>{
            console.error('error',error);
        })

    }

    return (
        <div className='container'>
            <Form onSubmit={handleForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <p style={{color: 'red'}}>{errorMessage}</p>
                {success && <p className='text-success'>Created User Successfully</p>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Signup;