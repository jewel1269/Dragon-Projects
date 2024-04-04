import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(loading){
        return <span className="loading mt-[480px] ml-[800px] loading-infinity loading-lg"></span>
    }
    if(user){
        return <CardDetails></CardDetails>
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;