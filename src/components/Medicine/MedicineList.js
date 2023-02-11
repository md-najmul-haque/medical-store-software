import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import useMedicine from '../../hooks/useMedicine';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import AddMedicine from './AddMedicine';

const MedicineList = () => {

    const [medicineModal, setMedicineModal] = useState(false)
    const [medicines] = useMedicine()

    return (
        <div className='bg-white'>
            <div className='bg-base-100 py-3 px-5 border-b-2'>
                <h1 className='uppercase text-xl font-bold text-left text-primary'>Medicine List</h1>
            </div>

            <div className='grid grid-cols-5 gap-x-10 px-5'>
                <div className="form-control w-full col-span-2">
                    <label className="label">
                        <span className="label-text font-bold">Medicine Name<span className='text-red-600 font-bold'>*</span></span>
                    </label>
                    <select className="select w-full input-bordered" >
                        <option disabled selected>All Medicine</option>
                        {
                            medicines?.map(medicine => {
                                return <option key={medicine._id}>{medicine.medicineName}</option>

                            })
                        }
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold">Stock Status<span className='text-red-600 font-bold'>*</span></span>
                    </label>
                    <select className="select w-full input-bordered" >
                        <option disabled selected>All</option>

                    </select>
                </div>

                <div className='mt-9'>
                    <button className='btn btn-primary text-white px-7'>Find</button>
                    <button className='btn btn-secondary text-white ml-5 px-5'>Excel</button>
                </div>

                <div className='flex justify-end'>
                    <label htmlFor="add-medicine" onClick={() => { setMedicineModal(true) }} className="btn btn-primary w-40 text-white normal-case mt-9" ><span className="mr-1"><GoPlus /></span>Add Medicine</label>
                </div>

            </div>

            <div className='py-3 px-5 mt-10 flex justify-between items-center'>
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

            <div class="flex flex-col px-5">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="bg-sky-300 border-b-2">
                                    <tr>
                                        <th scope="col" class="px-5 py-4">
                                            Sl
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Image
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Medicine Name
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Category
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Brand
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Supplier
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Barcode ID
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            MRP Price(BDT)
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Purchase Price(BDT)
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Sale Price(BDT)
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Purchase Quantity
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Sale Quantity
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Available Stock
                                        </th>
                                        <th scope="col" class="px-5 py-4">
                                            Booked Quantity
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            Status
                                        </th>
                                        <th scope="col" class="px-3 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        medicines?.map((medicine, index) => {
                                            return (
                                                <tr class="even:bg-gray-100 border-b">
                                                    <td class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td class="text-sm text-gray-900 font-light w-28 px-6 py-4 whitespace-nowrap">
                                                        <img src={medicine.photoURL} alt="" />
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.medicineName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.type}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.brandName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.supplierName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine?.barcodeId}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.price}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.purchasePrice}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.salePrice}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.purchaseQty}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.saleQuantity}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.saleQuantity}
                                                    </td>

                                                    <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                                        {medicine.bookedQty}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                                        {medicine.status}
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

            <div>
                {
                    medicineModal && <AddMedicine setMedicineModal={setMedicineModal} />
                }
            </div>


        </div>
    );
};

export default MedicineList;