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
        </div>
    )
}

export default SupplierList