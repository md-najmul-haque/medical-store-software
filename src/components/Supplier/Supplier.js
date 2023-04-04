import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import UpdateSupplier from './UpdateSupplier';
import { AiOutlineEdit } from 'react-icons/ai';

const Supplier = ({ supplier, index, refetch }) => {
    const [updateSupplier, setUpdateSupplier] = useState(false)

    const { _id, supplierId, supplierName, address, contactPersonPhoneNo, contactPerson, status } = supplier

    // delete supplier
    const deleteSupplier = (id) => {

        fetch(`http://localhost:5000/api/v1/supplier/${id}`,
            {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast(data.message)
                    refetch()
                } else {
                    toast(data.message)
                }
            })


    }

    return (
        <>
            <tr className="even:bg-gray-100 border-b" key={supplier._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplierId}</td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {supplierName}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {address}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {contactPersonPhoneNo}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {contactPerson}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {supplier?.payable}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {supplier?.paid}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {supplier?.payable - supplier?.paid}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {status}
                </td>
                <td className="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                    <label htmlFor="update-supplier" onClick={() => setUpdateSupplier(true)} className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></label>
                    <button onClick={() => deleteSupplier(_id)} className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
                </td>
            </tr>

            <div>
                {
                    updateSupplier && <UpdateSupplier setUpdateSupplier={setUpdateSupplier} refetch={refetch} supplier={supplier} />
                }
            </div>
        </>
    );
};

export default Supplier;