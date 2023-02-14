
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BiPurchaseTag } from 'react-icons/bi';
import { MdOutlineCategory, MdOutlinePayment } from 'react-icons/md';
import { AiOutlineHome, AiOutlineStock } from 'react-icons/ai';
import { HiDocumentReport } from 'react-icons/hi';
import { FaCartPlus, FaUser, FaUserTie } from 'react-icons/fa';
import { GiMedicines } from 'react-icons/gi';
import DashboardNavbar from './DashboardNavbar';

const DashboardLayout = () => {
    return (
        <div>
            <DashboardNavbar />
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side font-semibold">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul class="relative w-72">
                        <li class="relative" id="sidenavEx1">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx1" aria-expanded="true" aria-controls="collapseSidenavEx1">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'> <AiOutlineHome /></span> <span className='ml-2'>Dashboard</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link to="" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden  text-ellipsis whitespace-nowrap rounded" >Accounting</Link>
                                </li>
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded">HRM</Link>
                                </li>
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded ">Projects</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx11">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx11" aria-expanded="true" aria-controls="collapseSidenavEx11">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'> <BiPurchaseTag /> </span> <span className='ml-2'>Purchase</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx11" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link to="/dashboard/purchaseBill" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded mb-2 " >Purchase Bill</Link>
                                </li>
                                <li class="relative">
                                    <Link to="" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded " >Purchase Invoice</Link>
                                </li>
                                <li class="relative">
                                    <Link to="" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded " >Purchase Return</Link>
                                </li>
                                <li class="relative">
                                    <Link to="" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded " >History</Link>
                                </li>

                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx12">
                            <Link class="flex items-center text-md py-4 px-6 h-12 mt-2 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx12" aria-expanded="true" aria-controls="collapseSidenavEx12">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'> <GiMedicines /> </span> <span className='ml-2'>Medicine</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx12" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link to="/dashboard/medicineList" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Medicine List</Link>
                                </li>

                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx13">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap  rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx13" aria-expanded="true" aria-controls="collapseSidenavEx13">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'>   <MdOutlineCategory /> </span> <span className='ml-2'>Category</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx13" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link to="/dashboard/categoryList" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Category List</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx14">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white  cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx14" aria-expanded="false" aria-controls="collapseSidenavEx14">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'><FaUserTie /></span>  <span className='ml-2'>Supplier</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx14" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded " >Add New Supplier</Link>
                                </li>
                                <li class="relative">
                                    <Link to='/dashboard/supplierList' href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded " >Supplier List</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx15">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white  cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx15" aria-expanded="false" aria-controls="collapseSidenavEx15">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'><MdOutlinePayment /> </span> <span className='ml-2'>POS System</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx15" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link to="/salesBill" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Create Sales Bill</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx3">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx3" aria-expanded="false" aria-controls="collapseSidenavEx3">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'> <MdOutlinePayment /> </span>  <span className='ml-2'>Payment</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx3" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden text-ellipsis whitespace-nowrap rounded "   >Payment to Vendor</Link>
                                </li>
                            </ul>
                        </li>
                        <li class="relative" id="sidenavEx3">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white  cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx4" aria-expanded="false" aria-controls="collapseSidenavEx4">
                                <span className='bg-base-100 text-primary p-2 rounded-lg'><AiOutlineStock /></span><span>Stock</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx4" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Stock Info</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx3">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx5" aria-expanded="false" aria-controls="collapseSidenavEx5">
                                <span className='bg-base-100 text-primary p-2 rounded-lg mr-1'><FaCartPlus /></span> <span>Item</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx5" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Add Item</Link>
                                </li>
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Item List</Link>
                                </li>
                            </ul>
                        </li>



                        <li class="relative" id="sidenavEx3">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx7" aria-expanded="false" aria-controls="collapseSidenavEx7">
                                <span className='bg-base-100 text-primary p-2 rounded-lg mr-1'><FaUser /></span>   <span>Users</span>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                                </svg>
                            </Link>
                            <ul class="relative accordion-collapse collapse" id="collapseSidenavEx7" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Add New User</Link>
                                </li>
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Manage Access Level</Link>
                                </li>
                                <li class="relative">
                                    <Link href="#!" class="flex items-center text-sm py-4 pl-12 pr-6 h-6 overflow-hidden   text-ellipsis whitespace-nowrap rounded "   >Change Password</Link>
                                </li>
                            </ul>
                        </li>

                        <li class="relative" id="sidenavEx3">
                            <Link class="flex items-center text-md py-4 px-6 h-12 overflow-hidden   text-ellipsis whitespace-nowrap rounded-xl mb-2 hover:text-white hover:bg-primary mx-2 focus:bg-primary focus:text-white cursor-pointer" data-bs-toggle="collapse" data-bs-target="#collapseSidenavEx3" aria-expanded="false" aria-controls="collapseSidenavEx3">
                                <span className='bg-base-100 text-primary p-2 rounded-lg mr-1'><HiDocumentReport /></span>   <span>Reports</span>
                            </Link>
                        </li>
                    </ul>
                    {/* </div> */}

                </div>
            </div>

        </div>
    );
};

export default DashboardLayout;