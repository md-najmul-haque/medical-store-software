import React from 'react';
import { GoAlert } from 'react-icons/go';
import { MdDashboard, MdOutlineNotifications } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';


const SalesBillNavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Homepage</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle text-info text-2xl">
                    <MdDashboard />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <div className='text-2xl'>
                            <MdOutlineNotifications />
                        </div>
                        <span className="badge badge-xs border-none bg-red-600 text-white indicator-item">+99</span>
                    </div>
                </button>

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <div className='text-2xl'> < GoAlert /></div>
                        <span className="badge badge-xs border-none bg-red-600 text-white indicator-item mb-2">+99</span>

                    </div>
                </button>

                <button className="btn btn-ghost btn-circle text-2xl">
                    < FaUserPlus />
                </button>
            </div>
        </div>

    );
};

export default SalesBillNavbar;