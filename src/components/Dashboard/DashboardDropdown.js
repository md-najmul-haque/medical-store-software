
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaAngleRight } from 'react-icons/fa';
import { CgSpinner } from 'react-icons/cg';

const DashboardDropdown = ({ route, isActive, setIsActive }) => {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    const location = useLocation()

    return (
        <>
            <div onClick={() => setIsDropDownOpen(!isDropdownOpen)}
                className={`flex items-center justify-between mb-1 font-semibold text-lg px-5 rounded-xl hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer py-2 hover:shadow-xl ${isActive === route.id && "bg-primary text-white"}`}>
                <div className='flex items-center '>
                    <div className='bg-base-100 text-primary p-2 rounded-lg'>{route.icon}</div>
                    <div className='flex items-center justify-between'>
                        <div className='ml-2'>{route.name}</div>
                    </div>
                </div>


                <motion.div
                    animate={
                        isDropdownOpen
                            ? {
                                rotate: 90,
                            }
                            : { rotate: 0 }
                    }
                >
                    <FaAngleRight />
                </motion.div>

            </div>

            {
                isDropdownOpen && <div>
                    {route.subRoutes.map((subRoute, i) => (
                        <div key={i} custom={i}>
                            <NavLink onClick={() => setIsActive(subRoute.mainRouteId)} className={subRoute.path === location.pathname && "text-blue-600 font-bold"} to={subRoute.path}>
                                <div className='flex items-center px-12 hover:font-semibold hover:text-blue-700'>
                                    <div className="text-xs hover:rotate-180"><CgSpinner /> </div>
                                    <div className="ml-2">{subRoute.name}</div>
                                </div>
                            </NavLink>
                        </div>
                    ))}

                </div>
            }

        </>
    );
};

export default DashboardDropdown;