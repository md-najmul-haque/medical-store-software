
import React, { Children, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { BiMenu, BiPurchaseTag } from 'react-icons/bi';
import { MdOutlineCategory, MdOutlinePayment } from 'react-icons/md';
import { AiOutlineHome, AiOutlineStock } from 'react-icons/ai';
import { HiDocumentReport } from 'react-icons/hi';
import { FaCartPlus, FaHome, FaLock, FaMoneyBill, FaRProject, FaUser, FaUsers, FaUserTie } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import DashboardNavbar from './DashboardNavbar';
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import DashboardDropdown from './DashboardDropdown';

const routes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaHome />,
        subRoutes: [
            {
                path: "/dashboard/account",
                name: "Account ",
                icon: <FaUser />,
            },
            {
                path: "",
                name: "HRM",
                icon: <FaLock />,
            },
            {
                path: "",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        path: "/purchase",
        name: "Purchase",
        icon: <BiPurchaseTag />,
        subRoutes: [
            {
                path: "/dashboard/purchaseBill",
                name: "Purchase Bill ",
                icon: <FaUser />,
            },
            {
                path: "",
                name: "Purchase Invoice",
                icon: <FaLock />,
            },
            {
                path: "",
                name: "Purchase Return",
                icon: <FaMoneyBill />,
            },
            {
                path: "",
                name: "History",
                icon: <FaMoneyBill />,
            },
        ],
    }, {
        path: "/dashboard",
        name: "Medicine",
        icon: <GiMedicines />,
        subRoutes: [
            {
                path: "/dashboard/medicineList",
                name: "Medicine List",
                icon: <FaUser />,
            }
        ],
    }, {
        path: "/dashboard",
        name: "Category",
        icon: <MdOutlineCategory />,
        subRoutes: [
            {
                path: "/dashboard/categoryList",
                name: "Category List",
                icon: <FaUser />,
            }
        ],
    },
    {
        path: "/dashboard",
        name: "Supplier",
        icon: <FaUserTie />,
        subRoutes: [
            {
                path: "/dashboard/supplierList",
                name: "Supplier List",
                icon: <FaUsers />,
            }
        ],
    },
    {
        path: "/dashboard",
        name: "POS System",
        icon: <MdOutlinePayment />,
        subRoutes: [
            {
                path: "/salesBill",
                name: "Account ",
                icon: <FaUser />,
            }
        ],
    },
    {
        path: "/dashboard",
        name: "Payment",
        icon: <MdOutlinePayment />,
        subRoutes: [
            {
                path: "/dashboard/payment",
                name: "Payment to Vendor",
                icon: <FaUser />,
            }
        ],
    },
    {
        path: "/dashboard",
        name: "Stock",
        icon: <AiOutlineStock />,
        subRoutes: [
            {
                path: "/dashboard/stockInfo",
                name: "Stock Info",
                icon: <FaUser />,
            }
        ],
    },
    {
        path: "/dashboard",
        name: "Users",
        icon: <FaUsers />,
        subRoutes: [
            {
                path: "/dashboard/account",
                name: "Add New User ",
                icon: <FaUser />,
            },
            {
                path: "/dashboard/hrm",
                name: "User Access Level",
                icon: <FaLock />,
            },
            {
                path: "/dashboard/projects",
                name: "Change Password",
                icon: <FaMoneyBill />,
            },
        ],
    },

    {
        path: "/users",
        name: "Reports",
        icon: <HiDocumentReport />,
    }

];

const DashboardLayout = ({ children }) => {

    return (

        <div className='h-screen'>
            <DashboardNavbar />
            <div className='flex'>
                <div className='w-1/6 min-w-[250px]'>
                    <section className=''>
                        {
                            routes.map((route) => {
                                if (route.subRoutes) {
                                    return <DashboardDropdown key={route.name} route={route} />
                                }
                                return <NavLink activeClassName="text-blue-600" to={route.path} key={route.name}>
                                    <div className='flex items-center font-semibold text-lg px-5 rounded-xl hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer py-2 hover:shadow-xl'>
                                        <div className='bg-base-100 text-primary p-2 rounded-lg'>{route.icon}</div>
                                        <div className='ml-2'>{route.name}</div>
                                    </div>
                                </NavLink>
                            }
                            )
                        }

                    </section>
                </div>
                <div className='w-5/6'>
                    <Outlet />
                </div>

            </div>
        </div>
    );
};

export default DashboardLayout;