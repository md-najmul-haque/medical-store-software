import React from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';

const SalesBillForm = () => {
    return (
        <div className='mr-5'>
            <div className='grid grid-cols-2 gap-x-10'>
                <div className="form-control w-full">
                    <input
                        type="qr"
                        placeholder="Scan Barcode"
                        className="input w-full input-bordered focus:outline-none"
                    />
                </div>

                <div class="flex justify-center">
                    <div class="mb-3 xl:w-96">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-success focus:outline-none" placeholder="Tan" aria-label="Search" aria-describedby="button-addon2" />
                            <button class="btn inline-block px-6 py-2.5 bg-success text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-success hover:shadow-lg focus:bg-success  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-success active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <BiPlusMedical />
                            </button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="overflow-x-auto">
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
                        <tr>
                            <th className='border p-1 '>
                                <input
                                    type="text"
                                    className="input w-full input-bordered focus:outline-none"
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


            </div>
        </div>
    );
};

export default SalesBillForm;