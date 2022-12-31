import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from 'react-router-dom';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';



const Login = () => {
    const navigate = useNavigate();
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            if(user){
                navigate('/')
            }
        })
        .catch(error =>{
            console.log('error: ', error);
        })
    }
    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log('error: ', error);
        })
    }
    return (
        <div className='container w-50 mx-auto'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                <p>Don't have an account?</p>
                <NavLink to='/signup'>Register</NavLink>
                
            </div>
            <div className='mt-5'>
                <Button className='me-2' variant="outline-success">Login</Button>
                <Button onClick={handleGoogleSignIn} className='me-2' variant="outline-success">Google</Button>
                <Button onClick={handleGithubSignIn} className='me-2' variant="outline-success">Github</Button> 
            </div>
        </div>
    );
};

export default Login;