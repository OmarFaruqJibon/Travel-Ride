import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
      return (<div className="text-center spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>);
    }
    return(
      <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;