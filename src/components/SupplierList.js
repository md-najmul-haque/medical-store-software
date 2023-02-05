import React from "react";
import { Link } from "react-router-dom";
import { IoIosCreate } from 'react-icons/io';


const SupplierList = () => {

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
                        <p>55</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Paid (BDT)</h2>
                        <p>55</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Due (BDT)</h2>
                        <p>55</p>
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
                                            phone
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            contact Person
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

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @mdo
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">2</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @fat
                                        </td>
                                    </tr>
                                    <tr class="bg-gray-100 border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">3</td>
                                        <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center">
                                            Larry the Bird
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            @twitter
                                        </td>
                                    </tr>
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