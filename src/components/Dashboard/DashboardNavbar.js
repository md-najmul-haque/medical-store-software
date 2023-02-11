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

                <button className="btn btn-ghost btn-circle text-2xl">
                    < FaUserPlus />
                </button>
            </div>
        </div>

    );
};

export default DashboardNavbar;