import React from 'react';
import error from './error.json';
import Lottie from 'lottie-react';

const Error = () => {
    return (
        <Lottie className='size-150  mx-auto' animationData={error}></Lottie>
    );
};

export default Error;