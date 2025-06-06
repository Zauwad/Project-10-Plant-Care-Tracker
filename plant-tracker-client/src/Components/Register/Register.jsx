import React, { use, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { FaEye } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router';
import { FaGoogle } from "react-icons/fa";
import { auth } from '../../firebase.init';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';
// import { Helmet } from 'react-helmet-async';



const Register = () => {


    // calling authcontext
    // const userInfo = use(AuthContext) 
    // console.log(userInfo)  // eta print dey -> {createUser: ƒ}
    //BETTER WAY
    const { createUser, googleLogIn } = use(AuthContext)




    // errror ashle jeno ekta var e message rekhe pore show korte pari
    const [errorMesage, setErrorMessage] = useState('')
    // success er jnno banai ekjh ekta
    const [succesMessage, setSuccessMessage] = useState(false)
    // Eye button er jnnno state
    const [showPassword, setshowPassword] = useState(false)



    const navigate = useNavigate()


    const handleRegister = e => {
        // page jate load na mare tai dilam
        e.preventDefault()
        console.log(e)

        //email ar password er data collect kori
        const email = e.target.email.value
        const password = e.target.password.value
        // updating user details
        const photo = e.target.photo.value
        const name = e.target.name.value
        const profile = {
            displayName: name, photoURL: photo
        }

        // for terms and conditions check button
        // const terms = e.target.terms.checked

        // ager error state value roye jabe tai shurutei state value '' rakhi
        setErrorMessage('')
        // success er taw state theke reset mere rakhi
        setSuccessMessage(false)


        // firebase theke jate error na dekhaite hoy m,anualty ekta errror messaage banai
        const passwordRegularExample = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (passwordRegularExample.test(password) === false) {
            setErrorMessage('Password Must have an Uppercase letter, Must have a Lowercase letter, Length must be at least 6 characters')

            // ei funciton call hole nicher tay ar jabe na cz error tai ager function tai return kore dibe
            return
        }


        // })
        // .catch(error => {
        //     console.log(error)
        //     // jodi error ashe state var e pathay dibe
        //     setErrorMessage(error.message)
        // })




        // Creating User USING CONTEXT
        createUser(email, password)
            .then(result => {
                console.log(result)
                setSuccessMessage(true)
                // updating user details
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('profile Updated')
                    })
                    .catch(error => {
                        setErrorMessage(error.message)
                    })

                Swal.fire({
                    title: "Drag me!",
                    icon: "success",
                    draggable: true
                });
                navigate('/home')
                window.location.reload()
            })
            .catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })

    }


    const handleGoogleLogIn = () => {
        googleLogIn()
        // .then(result =>{
        //     user && navigate('/home')
        // })
        navigate('/home')
    }



    return (
        <div className='bg-base-200 p-10'>
            <div className='mx-auto mt-10 mb-20 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-10'>

                {/* <Helmet>
                {/* window.location.reload() */}
                {/* <title>Job Track | Sign Up</title> */}
                {/* </Helmet> */}


                <form onSubmit={handleRegister} className='space-y-5'>

                    <p className='text-5xl font-bold'>Sign Up Now</p>
                    {/* input filed */}


                    {/* name and photo url */}
                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>

                        {/* name dilam input e pore value pawar jnno */}
                        <input name='name' type="text" placeholder="Your Name" required />
                    </label>

                    {/* email field */}
                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>

                        {/* name dilam input e pore value pawar jnno */}
                        <input name='photo' type="text" placeholder="Photo Url" required />
                    </label>

                    <label className="input validator join-item">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </g>
                        </svg>

                        {/* name dilam input e pore value pawar jnno */}
                        <input name='email' type="email" placeholder="mail@site.com" required />
                    </label>
                    <div className="validator-hint hidden">Enter valid email address</div>

                    <br />

                    {/* password filed */}
                    <label className="input validator">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                                ></path>
                                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                            </g>
                        </svg>
                        <input
                            // eye button er jnno etar value dynamic dibo
                            // cz text e show korbe oi field password e hide thake
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Password"

                        // ei nicher part dile error orai show korbe manually dekhano lagbe na
                        // minLength="8"
                        // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        {/* button vitore na dhkle parent ke relative banay button ke absolute banay set kora lagto pos e */}
                        {/* onclick e showPassword er value toggel hobe */}
                        <button onClick={() => setshowPassword(!showPassword)}
                            className='btn-xs'>
                            <FaEye></FaEye>
                        </button>
                    </label>
                    {/* <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p> */}
                    <br />


                    {/* error message state e thakle show korbe error message ta */}
                    {
                        errorMesage && <p className='text-red-500'>{errorMesage}</p>
                    }
                    {/* success message er jnno ekta p dibo */}
                    {
                        succesMessage && <p className='text-green-500'>Succesfully Registered</p>
                    }

                    <p>Already a User? <NavLink className='text-blue-500' to='/login'>Log In</NavLink></p>

                    {/* submit button */}
                    <input className='btn btn-primary' type="submit" />
                </form>

                <button onClick={handleGoogleLogIn} className='btn btn-ghost bg-green-800 text-white shadow-lg shadow-green-500/50 ... mt-5'>
                    <FaGoogle />
                    Google Log In</button>
            </div>
        </div>
    );
};

export default Register;