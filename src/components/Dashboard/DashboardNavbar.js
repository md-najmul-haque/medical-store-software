import React from 'react';
import { GoAlert } from 'react-icons/go';
import { MdDashboard, MdOutlineNotifications } from 'react-icons/md';
import logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const DashboardNavbar = () => {

    const navigate = useNavigate()

    const handleUser = () => {
        localStorage.removeItem("token")
        navigate("/")
    }


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
                <ul tabIndex={0} className="mt-3 py-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <Link to='' className='cursor-pointer py-2 px-4 font-semibold hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-opacity-75'>
                        Profile
                    </Link>
                    <li onClick={() => handleUser()} className="cursor-pointer py-2 px-4 font-semibold hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-base-200 focus:ring-opacity-75" >Logout</li>
                </ul>
            </div>
        </div>

    );
};

export default DashboardNavbar;