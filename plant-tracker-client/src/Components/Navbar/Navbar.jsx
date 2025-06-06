import React, { use, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';

const Navbar = () => {
    const { user, LogOut } = use(AuthContext);
    const [currentTheme, setCurrentTheme] = useState('light');

    const themes = ['light', 'dark'];

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setCurrentTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        const nextTheme = themes[nextIndex];

        setCurrentTheme(nextTheme);
        document.documentElement.setAttribute('data-theme', nextTheme);
        localStorage.setItem('theme', nextTheme);
    };

    return (
        <div className='p-5 px-4 sm:px-6 md:px-10 flex flex-wrap justify-between items-center'>

            <div className="lg:mb-0">
                <Link to='/'><h1 className='text-green-800 text-xl sm:text-2xl'>Plant Pal</h1></Link>
            </div>


            <div className='drop-down-bar lg:hidden'>
                <div className="navbar-start">
                    <div className="dropdown dropdown-left">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                        </div>


                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' className='hover:underline decoration-green-500'>Home</NavLink></li>
                            <li><NavLink to='/allplants' className='hover:underline decoration-green-500'>All Plants</NavLink></li>
                            <li><NavLink to='/addplants' className='hover:underline decoration-green-500'>Add Plants</NavLink></li>
                            <li><NavLink to='/myplants' className='hover:underline decoration-green-500'>My Plants</NavLink></li>



                            {
                                !user && (
                                    <div className='gap-3'>
                                        <li>
                                            <NavLink to='/login' className='hover:underline decoration-green-500'>Login</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to='/register' className='hover:underline decoration-green-500'>Register</NavLink>
                                        </li>
                                    </div>
                                )
                            }

                            <li>
                                {
                                    user && (
                                        <div className="dropdown dropdown-left dropdown-hover">
                                            <div tabIndex={0} role="button" className="">
                                                <img className='rounded-full size-8' src={user.photoURL} alt="" />
                                            </div>
                                            <ul tabIndex={0}
                                                className="dropdown-content object-cover menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
                                                <li><Link to={'./myplants'}>{user.displayName}</Link></li>
                                                <li>
                                                    {user && <NavLink onClick={LogOut}>Log Out</NavLink>}
                                                </li>
                                            </ul>
                                        </div>
                                    )
                                }
                            </li>
                            <li>
                                <div className="flex items-center gap-2 mt-2 lg:mt-0">
                                    <button
                                        onClick={toggleTheme}
                                        className="btn btn-sm btn-ghost"
                                        title={`Current theme: ${currentTheme}`}
                                    >
                                        {currentTheme === 'light' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="5" />
                                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                                            </svg>
                                        )}
                                        {currentTheme === 'dark' && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                            </svg>
                                        )}
                                        <span className="capitalize">{currentTheme}</span>
                                    </button>
                                </div>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>


            <div className='w-full hidden  lg:w-auto lg:flex md:hidden flex-col lg:flex-row lg:items-center gap-3 lg:gap-4'>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <NavLink to='/' className='hover:underline decoration-green-500'>Home</NavLink>
                    <NavLink to='/allplants' className='hover:underline decoration-green-500'>All Plants</NavLink>
                    <NavLink to='/addplants' className='hover:underline decoration-green-500'>Add Plants</NavLink>
                    <NavLink to='/myplants' className='hover:underline decoration-green-500'>My Plants</NavLink>
                </div>

                {
                    !user && (
                        <div className='flex flex-col sm:flex-row gap-3'>
                            <NavLink to='/login' className='hover:underline decoration-green-500'>Login</NavLink>
                            <NavLink to='/register' className='hover:underline decoration-green-500'>Register</NavLink>
                        </div>
                    )
                }

                {
                    user && (
                        <div className="dropdown dropdown-left dropdown-hover">
                            <div tabIndex={0} role="button" className="">
                                <img className='rounded-full size-8' src={user.photoURL} alt="" />
                            </div>
                            <ul tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg">
                                <li><a>{user.displayName}</a></li>
                                <li>
                                    {user && <NavLink onClick={LogOut}>Log Out</NavLink>}
                                </li>
                            </ul>
                        </div>
                    )
                }

                <div className="flex items-center gap-2 mt-2 lg:mt-0">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-sm btn-ghost"
                        title={`Current theme: ${currentTheme}`}
                    >
                        {currentTheme === 'light' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                        )}
                        {currentTheme === 'dark' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        )}
                        <span className="capitalize">{currentTheme}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
