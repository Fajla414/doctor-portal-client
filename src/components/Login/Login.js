import React, { useContext } from 'react';
import loginImg from '../../images/login.png';
import Navbar from '../Shared/Navbar/Navbar';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase.config';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';
firebase.initializeApp(firebaseConfig)

const Login = () => {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useContext(MyContext);

    const handleEmailPasswordSignIn = (event) => {
        event.preventDefault();

    }


    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((res) => {
                const { displayName, email } = res.user;
                const user = { name: displayName, email };
                setLoggedInUser(user);
                navigate('/')
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className="row d-flex align-items-center" style={{ height: '80vh' }}>
                    <div className="col-md-5 offset-md-1">
                        <h3 className='text-center'>Login</h3>
                        <form className='mb-3' onSubmit={handleEmailPasswordSignIn}>
                            <div className="mb-3">
                                <label className="form-label">User Email</label>
                                <input type="email" className="form-control" required id='email' name='email' />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control mb-3" required id='password' name='password' />
                                <p>I don't have an account <span className='text-danger'>Sign up</span></p>
                            </div>
                            <button type="submit" className="btn bg-color text-light container">Sign In</button>
                        </form>
                        <Button onClick={handleGoogleSignIn} variant="contained" className='container my-2 bg-google' color='primary' startIcon={<Google />}>Sign In with Google</Button>
                    </div>
                    <div className="col-md-6">
                        <img src={loginImg} style={{ height: '90vh' }} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 