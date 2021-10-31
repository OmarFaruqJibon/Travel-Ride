import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './SignIn.css';

const SignIn = () => {
    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const {user, googleSignIn} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleSignIn = () =>{
        googleSignIn()
        .then(result => {
            history.push(redirect_uri);
            const newUser = result.user;
            setUsers(newUser);
            setError('');
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        }).finally(() => setIsLoading(false));
    }


   


    return (
        <div className="app text-center ">
            {error &&
                <div>
                    <h5 className="text-danger"> Warning: {error}</h5>
                    <p className="text-success">Please Try again</p>
                </div>
            }
            <button className="btn btn-primary m-5 p-3" onClick={handleSignIn}>Sign In with google</button>
        </div>
    );
};

export default SignIn;