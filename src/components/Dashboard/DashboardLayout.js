
import React, { Children, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
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
        id: 1,
        path: "/dashboard",
        name: "Dashboard",
        icon: <FaHome />,
        subRoutes: [
            {
                mainRouteId: 1,
                path: "/dashboard/account",
                name: "Account ",
                icon: <FaUser />,
            },
            {
                mainRouteId: 1,
                path: "",
                name: "HRM",
                icon: <FaLock />,
            },
            {
                mainRouteId: 1,
                path: "",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ],
    },
    {
        id: 2,
        path: "/purchase",
        name: "Purchase",
        icon: <BiPurchaseTag />,
        subRoutes: [
            {
                mainRouteId: 2,
                path: "/dashboard/purchaseBill",
                name: "Purchase Bill ",
                icon: <FaUser />,
            },
            {
                mainRouteId: 2,
                path: "",
                name: "Purchase Invoice",
                icon: <FaLock />,
            },
            {
                mainRouteId: 2,
                path: "",
                name: "Purchase Return",
                icon: <FaMoneyBill />,
            },
            {
                mainRouteId: 2,
                path: "",
                name: "History",
                icon: <FaMoneyBill />,
            },
        ],
    }, {
        id: 3,
        path: "/dashboard",
        name: "Medicine",
        icon: <GiMedicines />,
        subRoutes: [
            {
                mainRouteId: 3,
                path: "/dashboard/medicines",
                name: "Medicines",
                icon: <FaUser />,
            }
        ],
    },
    {
        id: 4,
        path: "/dashboard",
        name: "Category",
        icon: <MdOutlineCategory />,
        subRoutes: [
            {
                mainRouteId: 4,
                path: "/dashboard/categoryList",
                name: "Category List",
                icon: <FaUser />,
            }
        ],
    },
    {
        id: 5,
        path: "/dashboard",
        name: "Supplier",
        icon: <FaUserTie />,
        subRoutes: [
            {
                mainRouteId: 5,
                path: "/dashboard/suppliers",
                name: "Supplier List",
                icon: <FaUsers />,
            }
        ],
    },
    {
        id: 6,
        path: "/dashboard",
        name: "POS System",
        icon: <MdOutlinePayment />,
        subRoutes: [
            {
                mainRouteId: 6,
                path: "/salesBill",
                name: "POS",
                icon: <FaUser />,
            }
        ],
    },
    {
        id: 7,
        path: "/dashboard",
        name: "Payment",
        icon: <MdOutlinePayment />,
        subRoutes: [
            {
                mainRouteId: 7,
                path: "/dashboard/paymentToVendor",
                name: "Payment to Vendor",
                icon: <FaUser />,
            }
        ],
    },
    {
        id: 8,
        path: "/dashboard",
        name: "Stock",
        icon: <AiOutlineStock />,
        subRoutes: [
            {
                mainRouteId: 8,
                path: "/dashboard/stockInfo",
                name: "Stock Info",
                icon: <FaUser />,
            },
            {
                mainRouteId: 8,
                path: "/dashboard/itemForm",
                name: "Item Form",
                icon: <FaUser />,
            }
        ],
    },
    {
        id: 9,
        path: "/dashboard",
        name: "User Management",
        icon: <FaUsers />,
        subRoutes: [
            {
                mainRouteId: 9,
                path: "/dashboard/user",
                name: "User",
                icon: <FaUser />,
            }
        ],
    },

    {
        id: 10,
        path: "/dashboard/Reports",
        name: "Reports",
        icon: <HiDocumentReport />,
        subRoutes: [
            {
                mainRouteId: 10,
                path: "/dashboard/stockReport",
                name: "Stock Report",
                icon: <FaUser />,
            },
            {
                mainRouteId: 10,
                path: "/dashboard/datewiseReport",
                name: "Datewise Report",
                icon: <FaLock />,
            }
        ],
    }

];

const DashboardLayout = () => {
    const [isActive, setIsActive] = useState(false)

    return (

        <div className='h-screen'>
            <DashboardNavbar />
            <div className='flex'>
                <div className='w-1/6 min-w-[280px]'>
                    <section className=''>
                        {
                            routes.map((route) => {
                                if (route.subRoutes) {
                                    return <DashboardDropdown key={route.name} route={route} isActive={isActive} setIsActive={setIsActive} />
                                }
                                return <NavLink onClick={() => setIsActive(route.id)} activeClassName="text-blue-600" to={route.path} key={route.name}>
                                    <div className={`flex items-center font-semibold text-lg px-5 rounded-xl hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer py-2 hover:shadow-xl ${isActive === route.id && "bg-primary text-white"}`}>
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