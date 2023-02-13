import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { TbCurrencyTaka } from 'react-icons/tb';
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
            "expense": 1800,

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
            "expense": 2800,

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

    const lineChartData = [
        { date: '2022-01-01', income: 3200, expense: 3000 },
        { date: '2022-02-01', income: 3800, expense: 4000 },
        { date: '2022-03-01', income: 3800, expense: 3500 },
        { date: '2022-04-01', income: 4200, expense: 4000 },
        { date: '2022-05-01', income: 3800, expense: 3500 },
        { date: '2022-01-01', income: 3200, expense: 3000 },
        { date: '2022-02-01', income: 4200, expense: 4000 },
        { date: '2022-03-01', income: 4000, expense: 3500 },
        { date: '2022-04-01', income: 4200, expense: 4000 },
        { date: '2022-05-01', income: 3600, expense: 3500 },
    ];

    return (

        <div className='grid grid-cols-3 gap-x-5 w-full'>
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

                <div className='col-span-4 shadow-lg rounded-xl bg-white mt-5'>
                    <h2 className='font-semibold pl-5 text-lg py-1 my-4 border-l-4 border-gray-500'>Account Balance</h2>
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-center">
                                    <thead style={{ backgroundColor: "#f8f9fd" }} class="bg-white text-primary border-b">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">
                                                BANK
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                HOLDER NAME
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                BALANCE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-6 py-4 whitespace-nowrap text-md font-medium"></td>
                                            <td class="px-6 py-4 whitespace-nowrap text-md font-medium">Cash</td>
                                            <td class="text-md px-6 py-4 flex justify-center items-center">
                                                <TbCurrencyTaka /> <span className='ml-1'>20000</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='bg-white shadow-lg rounded-xl mt-0 pt-0'>
                    <div className='flex justify-between font-semibold px-7 border-b-2 text-lg py-4 my-2'>
                        <p className='text-primary'>Cashflow</p>
                    </div>
                    <div className='pl-7'>
                        <ResponsiveContainer width="95%" height={300}>
                            <LineChart data={lineChartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="income" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='bg-white shadow-lg rounded-xl mt-5 p-5'>
                    <h2 className='font-semibold pl-5 text-lg py-1 mb-3'>Income vs Expense</h2>
                    <div className='grid grid-cols-2 gap-5 pl-5'>
                        <div className='flex justify-start items-center'>
                            <div className='flex justify-center items-center'>
                                <p className='p-2 bg-info text-white font-bold text-xl rounded-lg'><FaFileInvoiceDollar /></p>
                            </div>
                            <div className='ml-2'>
                                <small className='block'>Today's Income</small>
                                <p class="flex justify-start items-center font-bold text-success">
                                    <TbCurrencyTaka /> <span className='ml-1'>20000</span>
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center'>
                            <div className='flex justify-center items-center'>
                                <p className='p-2 bg-secondary text-white font-bold text-xl rounded-lg'><CgFileDocument /></p>
                            </div>
                            <div className='ml-2'>
                                <small className='block'>Today's Expense</small>
                                <p class="flex justify-start items-center font-bold text-success">
                                    <TbCurrencyTaka /> <span className='ml-1'>20000</span>
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center'>
                            <div className='flex justify-center items-center'>
                                <p className='p-2 bg-success text-white font-bold text-xl rounded-lg'><CgFileDocument /></p>
                            </div>
                            <div className='ml-2'>
                                <small className='block'>This Month Income</small>
                                <p class="flex justify-start items-center font-bold text-success">
                                    <TbCurrencyTaka /> <span className='ml-1'>20000</span>
                                </p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center'>
                            <div className='flex justify-center items-center'>
                                <p className='p-2 bg-warning text-white font-bold text-xl rounded-lg'><FaFileInvoiceDollar /></p>
                            </div>
                            <div className='ml-2'>
                                <small className='block'>This Month Expense</small>
                                <p class="flex justify-start items-center font-bold text-success">
                                    <TbCurrencyTaka /> <span className='ml-1'>20000</span>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;