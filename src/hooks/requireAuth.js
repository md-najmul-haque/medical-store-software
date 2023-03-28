import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import useUser from './useUser';

const RequireAuth = ({ children }) => {
    const [token, loader] = useUser();
    const location = useLocation()

    if (loader) {
        return <Loading />
    }

    if (!token) {
        return <Navigate to='/' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;