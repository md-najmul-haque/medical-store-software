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
                        <h2 className="bg-secondary p-3 text-white">Total Payable(BDT)</h2>
                        <p>55</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Payable(BDT)</h2>
                        <p>55</p>
                    </div>
                </div>

                <div className="card w-96 p-0 bg-base-100 shadow-xl">
                    <div className="card-body p-0">
                        <h2 className="bg-secondary p-3 text-white">Total Payable(BDT)</h2>
                        <p>55</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SupplierList