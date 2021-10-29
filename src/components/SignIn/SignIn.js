import React from 'react';
import useAuth from '../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const {user,handleSignOut, googleSignIn} = useAuth();


    return (
        <div className="app text-center ">
            <button className="btn btn-primary m-5 p-3" onClick={googleSignIn}>Sign In with google</button>
        </div>
    );
};

export default SignIn;