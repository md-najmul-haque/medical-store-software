import React, { useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

const SalesBillForm = ({ medicine }) => {
    const [customerData, setCustomerData] = useState([])
    const [customerNumber, setCustomerNumber] = useState('')


    console.log(customerNumber)

    const findCustomer = () => {
        if (customerNumber) {
            fetch(`customer.json`)
                .then(res => res.json())
                .then(data => {
                    const selectedCustomer = data.filter(customer => customer.customerNumber === customerNumber)
                    setCustomerData(selectedCustomer)
                    // console.log(selectedCustomer)
                })

            // console.log(customerData)
        }

    }



    return (
        <div className='mr-5'>
            <div className='grid grid-cols-2 gap-x-10'>

                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Customer Name / Phone Number"
                        className="input w-full input-bordered focus:outline-none"
                        defaultValue={customerData[0]?.customerName}

                    />
                </div>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-full focus:outline-none" onChange={(e) => setCustomerNumber(e.target.value)} />
                        <button onClick={() => findCustomer()} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                {/* <div class="flex justify-center">
                    <div class="mb-3">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="text" name='mobile' class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-success focus:outline-none" placeholder="Mobile" aria-label="Search" aria-describedby="button-addon2" />
                            <button type='submit' class="btn inline-block px-6 py-2.5 bg-success text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-success hover:shadow-lg focus:bg-success  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-success active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <BiPlusMedical />
                            </button>
                        </div>
                    </div>
                </div> */}

            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full border">
                    <thead className='py-10'>
                        <tr>
                            <th>Medicine Information</th>
                            <th className='border'>Batch</th>
                            <th className='border'>Expire date</th>
                            <th className='border'>Quantity</th>
                            <th className='border'>Price</th>
                            <th className='border'>Discount %</th>
                            <th className='border'>Total</th>
                            <th className='border'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            medicine.map(med => {
                                return (
                                    <tr>
                                        <th className='border p-1 '>
                                            <input
                                                type="text"
                                                className="input w-full input-bordered focus:outline-none"
                                                defaultValue={med?.medicineName}
                                            />
                                        </th>
                                        <td className='border p-1'>
                                            <input
                                                type="text"
                                                className="input w-full px-0 input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="date"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                                value={med?.defaultQuantity}
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <button className='btn btn-sm bg-red-200 hover:bg-red-300 border-none text-red-600'><RiDeleteBin5Fill /></button>
                                            <button className='btn btn-sm bg-green-200 hover:bg-green-300 border-none text-green-700 ml-2'><AiFillEye /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                <div class="flex justify-end items-center mt-5 mb-2">
                    <h2 className='p-3 font-semibold'>Invoice Discount: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>
                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Total Discount: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Total VAT: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Grand Total: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Previous: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>change: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                    />
                </div>

            </div>
        </div>
    );
};

export default SalesBillForm;