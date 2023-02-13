import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            "name": "January",
            "income": 4000,
            "expense": 2400,

        },
        {
            "name": "February",
            "income": 3000,
            "expense": 1398,

        },
        {
            "name": "March",
            "income": 2000,
            "expense": 9800,

        },
        {
            "name": "April",
            "income": 2780,
            "expense": 3908,

        },
        {
            "name": "May",
            "income": 1890,
            "expense": 4800,

        },
        {
            "name": "June",
            "income": 2390,
            "expense": 3800,

        },
        {
            "name": "July",
            "income": 3490,
            "expense": 4300,

        },
        {
            "name": "August",
            "income": 4000,
            "expense": 2400,

        },
        {
            "name": "September",
            "income": 3000,
            "expense": 1398,

        },
        {
            "name": "October",
            "income": 2000,
            "expense": 9800,

        },
        {
            "name": "November",
            "income": 2780,
            "expense": 3908,

        },
        {
            "name": "December",
            "income": 1890,
            "expense": 4800,

        }


    ]

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

                    <div className='col-span-4 shadow-lg rounded-xl bg-white mt-5'>
                        <div className='flex justify-between font-semibold px-7 border-b-2 text-lg py-4 my-2'>
                            <p className='text-primary'>Income and Expense</p>
                            <p className='text-gray-400'> Current Year - 2023</p>
                        </div>
                        <div className='pl-7'>
                            <ResponsiveContainer width="95%" height={400}>
                                <BarChart data={data}>
                                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                    <XAxis dataKey="name" />
                                    {/* <YAxis /> */}
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="income" fill="#8884d8" />
                                    <Bar dataKey="expense" fill="#82ca9d" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
                <div>2</div>
            </div>

        </div>
    );
};

export default Dashboard;