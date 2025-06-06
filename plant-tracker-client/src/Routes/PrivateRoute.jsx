import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';
import Loading from './Loading.json'
import Lottie from 'lottie-react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);

    if (loading) {
        return <div>
            <p className='text-center'>Loading Data...</p>
            <Lottie className='size-70 shadow-2xl mx-auto' animationData={Loading}></Lottie>
        </div>; // Or a spinner
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
