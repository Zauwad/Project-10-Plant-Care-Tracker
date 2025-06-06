import React, { use, useRef, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { NavLink, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';



const Login = () => {

    // using state for error message storing
    const [errorMessage, setErrorMessage] = useState('')

    // ekta ref variable use kortesi since tar sathe target e r connection nai
    const emailRef = useRef()


    // using context
    // BRINGING FUNCTION FROM AUTHCONTEXT
    const { logIn, googleLogIn } = use(AuthContext)

    const navigate = useNavigate()


    const handleLogIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email)
        console.log(password)

        setErrorMessage('')


        //SIGN IN WITH CONTEXT API 
        logIn(email, password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Successfully Logged In",
                    icon: "success",
                    draggable: true
                });
                navigate('/home')
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Incorrect Credentials!",
                    footer: '<a href="#">Why do I have this issue?</a>'
                });
            })
    }



    const handleGoogleLogIn = () => {
        googleLogIn()
        // .then(result => {
        //     user && navigate('/home')
        // })
        navigate('/home')

    }

    // forgot password button handler
    const handleForgetPassword = () => {
        // email ref e current name e ekta object thake okhn theke value property r value nilam
        console.log(emailRef)
        const email = emailRef.current.value

        // reseting error message
        setErrorMessage('')

        // sendPasswordResetEmail(auth, email)
        //     .then(() => {
        //         alert('Password Reset Email Sent')
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         setErrorMessage(error.message)
        //     })

        navigate('/forgetpassword')
    }



    return (
        <div className="hero bg-base-200 min-h-screen">

            {/* <Helmet>
                {/* window.location.reload() */}
            {/* <title>Job Track | Log In</title> */}
            {/* </Helmet> */} */

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body space-y-5">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className='text-red-600'>Login first to get access to website features</p>
                        <form className='space-y-3' onSubmit={handleLogIn}>
                            <label className="label">Email</label>
                            <input ref={emailRef} name='email' type="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a onClick={handleForgetPassword} className="link link-hover text-blue-500">Forgot password?</a></div>
                            <input className='btn btn-primary' type="submit" />
                        </form>

                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>

                        }

                        <p>New to this website? please <NavLink className='text-blue-500' to='/register'>Sign Up</NavLink></p>



                        <button onClick={handleGoogleLogIn} className='text-white btn btn-ghost bg-green-800 shadow-lg shadow-green-500/50 ...'>
                            <FaGoogle />
                            Google Log In</button>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;