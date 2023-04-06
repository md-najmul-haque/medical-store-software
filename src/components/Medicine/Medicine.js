import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import UpdateMedicine from './UpdateMedicine';

const Medicine = ({ medicine, index, refetch }) => {
    const [updateMedicine, setUpdateMedicine] = useState(false)

    const { _id, imageURL, medicineName, medicineCategory, brandName, supplierName, barcodeId, price, purchasePrice, salePrice, purchaseQty, saleQuantity, bookedQty, status } = medicine
    console.log(_id)

    const deleteMedicine = (id) => {

        fetch(`http://localhost:5000/api/v1/medicine/${id}`,
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
            <tr className="even:bg-gray-100 border-b">
                <td className="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index ? index + 1 : 1}</td>
                <td className="text-sm text-gray-900 font-light w-28 px-6 py-4 whitespace-nowrap">
                    <img src={imageURL} alt="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {medicineName}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {medicineCategory}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {brandName}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {supplierName.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {barcodeId}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {price}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {purchasePrice}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {salePrice}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {purchaseQty}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {saleQuantity}
                </td>
                <td className="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                    {saleQuantity}
                </td>

                <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                    {bookedQty}
                </td>
                <td className="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                    {status}
                </td>

                <td className="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                    <label htmlFor="update-medicine" onClick={() => { setUpdateMedicine(true) }} className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></label>
                    <button onClick={() => { deleteMedicine(medicine._id) }} className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
                </td>
            </tr>

            <div>
                {
                    updateMedicine && <UpdateMedicine setUpdateMedicine={setUpdateMedicine} refetch={refetch} medicine={medicine} _id={_id} />
                }
            </div>
        </>
    );
};

export default Medicine;