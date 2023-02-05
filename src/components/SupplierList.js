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

            <div className="overflow-x-auto mt-16">
                <table className="table table-zebra w-full bg-info">
                    <thead className='py-10 bg-info'>
                        <tr className=''>
                            <th className=''>SL</th>
                            <th className='border'>Date</th>
                            <th className='border'>Medicine Name</th>
                            <th className='border'>Stock</th>
                            <th className='border'>Barcode ID</th>
                            <th className='border'>Previous QTY</th>
                            <th className='border'>Stock</th>
                            <th className='border'>Remarks</th>
                            <th className='border'>Status</th>
                            <th className='border'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border'>
                            <th className='border-2 flex justify-center items-center text-red-600'></th>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className=' border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <th className='border'></th>
                            <th className='border'></th>
                        </tr>
                        <tr className='border'>
                            <th className='border-2 flex justify-center items-center text-red-600'></th>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className=' border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <td className='border-2'></td>
                            <th className='border'></th>
                            <th className='border'></th>
                        </tr>
                    </tbody>
                </table>


            </div>


        </div>
    )
}

export default SupplierList