import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { FaFileInvoiceDollar } from 'react-icons/fa';

const Dashboard = () => {

    return (
        <div>
            <div className='grid grid-cols-3 gap-x-5'>
                <div className='grid grid-cols-4 gap-x-5 col-span-2'>
                    <div className='bg-white pb-10 pt-6 rounded-xl shadow-lg pl-7'>
                        <p className='p-2 bg-info inline-block mb-5 text-white font-bold text-xl rounded-lg'><BsPeople /></p>
                        <small className='block'>Total</small>
                        <p className='font-semibold py-1'>Customers</p>
                        <p className='font-bold text-xl'>1</p>
                    </div>

                    <div className='bg-white pb-10 pt-6 rounded-xl shadow-lg pl-7'>
                        <p className='p-2 bg-secondary inline-block mb-5 text-white font-bold text-xl rounded-lg'><BsPeople /></p>
                        <small className='block'>Total</small>
                        <p className='font-semibold py-1'>Vendors</p>
                        <p className='font-bold text-xl'>1</p>
                    </div>

                    <div className='bg-white pb-10 pt-6 rounded-xl shadow-lg pl-7'>
                        <p className='p-2 bg-success inline-block mb-5 text-white font-bold text-xl rounded-lg'> <FaFileInvoiceDollar /></p>
                        <small className='block'>Total</small>
                        <p className='font-semibold py-1'>Invoices</p>
                        <p className='font-bold text-xl'>1</p>
                    </div>

                    <div className='bg-white pb-10 pt-6 rounded-xl shadow-lg pl-7'>
                        <p className='p-2 bg-red-500 inline-block mb-5 text-white font-bold text-xl rounded-lg'> <FaFileInvoiceDollar /></p>
                        <small className='block'>Total</small>
                        <p className='font-semibold py-1'>Bills</p>
                        <p className='font-bold text-xl'>1</p>
                    </div>

                    <div className='col-span-4 bg-white'>
                        <div className='flex justify-between'>
                            <p>Income and Expense</p>
                            <p>Current Year - 2023</p>
                        </div>

                    </div>
                </div>
                <div>2</div>
            </div>

        </div>
    );
};

export default Dashboard;