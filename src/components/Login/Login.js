import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
<<<<<<< HEAD
import { NavLink, useNavigate } from 'react-router-dom';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
=======
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {getAuth} from 'firebase/auth'
>>>>>>> a67618d (creat userContext)
import app from '../firebase/firebase.config';
import { AuthContext } from '../Context/UserContext';




const Login = () => {
<<<<<<< HEAD
    const navigate = useNavigate();
=======
    const {googleSignIn, githubSignIn, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    console.log(location.state?.from?.pathname);


>>>>>>> a67618d (creat userContext)
    const auth = getAuth(app);
    const handleLoginForm = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            if(user){
                navigate(from, { replace: true });
            }
        })
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const user = result.user;
            console.log(user);
            if(user){
<<<<<<< HEAD
                navigate('/')
=======
                navigate(from, { replace: true });
>>>>>>> a67618d (creat userContext)
            }
        })
        .catch(error =>{
            console.log('error: ', error);
        })
    }
    const handleGithubSignIn = () =>{
        githubSignIn()
        .then(result =>{
            const user = result.user
            if(user){
                navigate(from, { replace: true });
            }
            console.log(user);
        })
        .catch(error =>{
            console.log('error: ', error);
        })
    }
    return (
        <div className='container w-50 mx-auto'>
            <Form onSubmit={handleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button  variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div>
                <p>Don't have an account? <Link to='/signup'>Register</Link></p>
                
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