
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useMedicine from '../../hooks/useMedicine';
import Loading from '../Loading/Loading';

const StockReport = () => {
    const [medicines, setMedicines, loading] = useMedicine()
    const [medicineQuantity, setMedicineQuantity] = useState(10)
    const [query, setQuery] = useState('')

    if (loading) {
        return <Loading />
    }

    const keys = ['_id', 'medicineName', 'genericName', 'supplierName', 'type', 'status']

    const search = (data) => {
        return data.filter(medicine => keys.some(key => medicine[key]?.toLowerCase().includes(query)))
    }



    return (

        <div className=''>
            <div className='py-3 px-5'>
                <h1 className='uppercase text-xl font-bold text-left text-primary'>Stock Report</h1>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/stockReport'>Stock Report</Link></li>
                    </ul>
                </div>
            </div>

            <div className="bg-white mx-5 shadow-xl rounded-xl">

                <div className='flex justify-center item-center'>
                    <div className='text-center mt-5'>
                        <h1 className='text-2xl font-semibold'>Stock Report</h1>
                        <h2>{new Date().toLocaleString()}</h2>
                    </div>
                </div>

                <div className='py-5 px-5 flex justify-between items-center'>
                    <div className='flex'>
                        <p>Show</p>
                        <select onChange={e => setMedicineQuantity(e.target.value)} className="input-bordered bg-base-200 mx-1" >
                            <option>5</option>
                            <option selected>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                        <p>entries</p>
                    </div>
                    <div className="form-control w-full flex justify-end items-end">
                        <div className="flex">
                            <label className="label">
                                <span className="label-text font-semibold">Search:</span>
                            </label>
                            <input
                                type="text"
                                onChange={event => setQuery(event.target.value)}
                                className="max-w-xs border-2 bg-white focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="overflow-x-auto">
                        <div class="min-w-full">
                            <div class="">
                                <table class="min-w-full text-center">
                                    <thead class="bg-accent border-b-2">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">
                                                Sl
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Medicine Name
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Generic Name
                                            </th>

                                            <th scope="col" class="px-6 py-4">
                                                Barcode ID
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Available Stock
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Category
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Supplier
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                MRP Price (BDT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Purchase Price (BDT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Total Purchase price (BDT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Sale Price (BDT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Total Sale price (BDT)
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {search(medicines)?.slice(0, medicineQuantity)?.map((medicine, index) => {
                                            return (
                                                <tr class="even:bg-gray-100 border-b">
                                                    <td class="px-5 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.medicineName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.genericName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine?.barcodeId}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.quantity}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.type}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.supplierName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine.price}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">
                                                        {medicine?.barcodeId}
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
                                                    <td class="text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap">
                                                        {medicine.status}
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


        </div>
    );
};

export default StockReport;