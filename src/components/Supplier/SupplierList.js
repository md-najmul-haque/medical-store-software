import React from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from 'react-icons/io';
import useSupplier from "../../hooks/useSupplier";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';


const SupplierList = () => {
    const [suppliers] = useSupplier()

    return (
        <div className='bg-white h-screen'>
            <div className='bg-base-100 py-3 px-5 border-b-2 flex items-center'>
                <h1 className='uppercase text-xl font-bold text-left'>Supplier List</h1>
                <Link to='' className="btn btn-primary text-white normal-case btn-sm ml-5" ><span className="mr-1"><IoIosCreate /></span> Create Supplier</Link>
            </div>
            <div className="flex gap-16 justify-end mt-10 mr-2">
                <div className="card w-96 pb-10 bg-white shadow-xl">
                    <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                        <h2 className="p-3 font-2xl text-primary font-bold">Total Payable (BDT)</h2>
                        <p className="p-3 rounded-md bg-primary text-white">100000</p>
                    </div>
                </div>

                <div className="card w-96 pb-10 bg-white shadow-xl">
                    <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                        <h2 className="p-3 font-2xl text-primary font-bold">Total Paid (BDT)</h2>
                        <p className="p-3 rounded-md bg-primary text-white">50000</p>
                    </div>
                </div>

                <div className="card w-96 pb-10 bg-white shadow-xl">
                    <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                        <h2 className="p-3 font-2xl text-primary font-bold">Total Due (BDT)</h2>
                        <p className="p-3 rounded-md bg-primary text-white">50000</p>
                    </div>
                </div>

            </div>

            <div className='py-3 px-5 mt-10 border-b-2 flex justify-between items-center'>
                <div className='flex'>
                    <p>Show</p>
                    <select className="input-bordered bg-base-200 mx-1" >
                        <option selected>100</option>
                    </select>
                    <p>entries</p>
                </div>
                <div className="form-control w-full flex justify-end items-end">
                    <div className="flex">
                        <label className="label">
                            <span className="label-text font-semibold">Search:</span>
                        </label>
                        <input
                            type="number"
                            className="max-w-xs border-2 bg-white focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">
                                            Sl
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Supplier Id
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Supplier Name
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Address
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Phone
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Contact Person
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Payable
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Paid
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Due
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        suppliers?.map((supplier, index) => {
                                            return (
                                                <tr class="even:bg-gray-100 border-b" key={supplier._id}>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplier._id}</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.supplierName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.address}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.phone}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.contactPerson}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.payable}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.paid}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.payable - supplier.paid}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {supplier.status}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                                                        <button className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></button>
                                                        <button className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SupplierList