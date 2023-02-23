
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaAngleRight } from 'react-icons/fa';

const DashboardDropdown = ({ route }) => {

    const [isDropdownOpen, setIsDropDownOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsDropDownOpen(!isDropdownOpen)} className='flex items-center justify-between font-semibold text-lg px-5 rounded-xl hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer py-2'>
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

            {isDropdownOpen && <div>
                {route.subRoutes.map((subRoute, i) => (
                    <div key={i} custom={i}>
                        <NavLink to={subRoute.path}>
                            <div className='flex items-center px-10'>
                                <div className="">{subRoute.icon}</div>
                                <div className="ml-2">{subRoute.name}</div>
                            </div>
                        </NavLink>
                    </div>
                ))}

            </div>}

        </>
    );
};

export default DashboardDropdown;