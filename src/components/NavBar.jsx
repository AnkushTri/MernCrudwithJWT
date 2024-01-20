import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './style/NavBar.css'
import { useAuth } from '../store/auth';

const NavBar = () => {

    const { users, loggedIn } = useAuth();

    return (
        <>
            <div className='container'>
                <div className='nav'>
                    Ankush Kumar
                </div>
                <div className='nav'>
                    <div className='nav_sec'>
                        <Link className="nav_link" to="/">Home</Link>
                    </div>
                    <div className='nav_sec'>
                        <Link className="nav_link" to="/about">About</Link>
                    </div>
                    <div className='nav_sec'>
                        <Link className="nav_link" to="/contact">Contact</Link>
                    </div>
                    <div className='nav_sec'>
                        <Link className="nav_link" to="/service">Services</Link>
                    </div>
                    {
                        loggedIn ?
                            <>
                                <div className='nav_sec'>
                                    <Link className="nav_link" to="/logout">Logout</Link>
                                </div>
                                {users.isAdmin && (
                                    <div className='nav_sec'>
                                        <Link className="nav_link" to="/admin">Admin</Link>
                                    </div>
                                )}
                            </> :
                            <>
                                <div className='nav_sec'>
                                    <Link className="nav_link" to="/login">Login</Link>
                                </div>
                                <div className='nav_sec'>
                                    <Link className="nav_link" to="/signup">SignUp</Link>
                                </div>
                            </>
                    }

                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default NavBar