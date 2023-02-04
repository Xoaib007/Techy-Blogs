import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [user, setUser] = useState(null);

    return (
        <div className="navbar bg-transparent pt-5 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><p>Item 1</p></li>
                        <li tabIndex={0}>
                            <p className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </p>
                            <ul className="p-2">
                                <li><p>Submenu 1</p></li>
                                <li><p>Submenu 2</p></li>
                            </ul>
                        </li>
                        <li><p>Item 3</p></li>
                    </ul>
                </div>
                <Link to='/'>
                    <p className=" ml-5 text-white font-bold text-2xl bg-blue-800 px-3 py-1 border-4 border-white logo">Dumb Thoughts...</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><p>Item 1</p></li>
                    <li tabIndex={0}>
                        <p>
                            Parent
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </p>
                        <ul className="p-2">
                            <li><p>Submenu 1</p></li>
                            <li><p>Submenu 2</p></li>
                        </ul>
                    </li>
                    <li><p>Item 3</p></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user === null ?
                        <Link to='/user/signup' className="btn bg-black border-none text-white hover:bg-white hover:text-black rounded-none">Get started<FontAwesomeIcon icon={faArrowRightToBracket} className='w-4 h-4 ml-2'></FontAwesomeIcon></Link>
                    :
                        <>
                            <Link to='/dash' className="mr-8"><FontAwesomeIcon icon={faPenToSquare} className='w-8 h-8 text-white hover:w-9 hover:h-9'></FontAwesomeIcon></Link>

                            <Link to='/dash' className="mr-8"><FontAwesomeIcon icon={faUser} className='w-8 h-8 hover:w-9 hover:h-9 text-white'></FontAwesomeIcon></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;