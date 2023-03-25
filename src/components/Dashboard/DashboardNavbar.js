import React from 'react';
import { GoAlert } from 'react-icons/go';
import { MdDashboard, MdOutlineNotifications } from 'react-icons/md';
import { FaUserPlus } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
    return (
        <div className="navbar bg-base-100 mb-5">
            <div className="navbar-start">
                <div className='w-48'>
                    <img src={logo} alt="" />
                </div>

            </div>

            <div className="navbar-end">
                <Link to='/dashboard' className="btn btn-ghost btn-circle text-info text-2xl">
                    <MdDashboard />
                </Link>
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


            </div>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://i.ibb.co/85v9KGV/Portrait-Placeholder.png" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <Link to='' className='ml-2'>
                        <a className="justify-between">
                            Profile
                        </a>
                    </Link>
                    <Link to='/' className='ml-2'><a>Logout</a></Link>
                </ul>
            </div>
        </div>

    );
};

export default DashboardNavbar;