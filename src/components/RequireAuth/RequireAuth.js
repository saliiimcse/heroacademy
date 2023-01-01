import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';



const RequireAuth = ({ children }) => {
   const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if (loading) {
        return <p>Loading...</p>
    }
    if (user && user.uid) {
        return children;
    }
    else {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default RequireAuth;