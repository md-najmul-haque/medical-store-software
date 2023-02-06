import React from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from 'react-icons/io';
import useSupplier from "../hooks/useSupplier";


const SupplierList = () => {
    const [suppliers] = useSupplier()

    return (
        <div className='bg-white h-screen'>
            <div className='bg-base-100 py-3 px-5 border-b-2 flex items-center'>
                <h1 className='uppercase text-xl font-bold text-left'>Supplier List</h1>
                <Link to='' className="btn btn-primary text-white normal-case btn-sm ml-5" ><span className="mr-1"><IoIosCreate /></span> Create Supplier</Link>
            </div>
            <div className="flex gap-16 justify-end mt-5 mr-2">
                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Payable (BDT)</h2>
                        <p>100000</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Paid (BDT)</h2>
                        <p>50000</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Due (BDT)</h2>
                        <p>50000</p>
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
                            <table class="min-w-full">
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
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex items-center justify-center">
                                                        <button className="btn btn-sm btn-info"> <IoIosCreate /> Edit</button>
                                                        <button className="btn btn-sm btn-error ml-2">Delete</button>
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