import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import useMedicine from '../../hooks/useMedicine';
import AddMedicine from './AddMedicine';
import { Link } from 'react-router-dom';
import { CSVLink } from "react-csv";
import Loading from '../Loading/Loading';
import Medicine from './Medicine';
import useSupplier from '../../hooks/useSupplier';

const Medicines = () => {
    const { isLoading, medicines, refetch } = useMedicine()
    const { suppliers } = useSupplier()
    const [medicineModal, setMedicineModal] = useState(false)
    const [query, setQuery] = useState('')
    const [medicineQuantity, setMedicineQuantity] = useState(10)
    const [medicineName, setMedicineName] = useState('')
    const [selectedMedicine, setSelectedMedicine] = useState(null)


    if (isLoading) {
        return <Loading />
    }

    const keys = ['_id', 'medicineName', 'genericName', 'supplierName', 'type', 'status']

    const search = (data) => {
        return data.filter(medicine => keys.some(key => medicine[key]?.toLowerCase().includes(query)))
    }

    const findMedicine = () => {
        if (medicineName === "All Medicine") {
            setSelectedMedicine(null)

        } else {
            const selectedMedicine = medicines.find(medicine => medicine.medicineName === medicineName)
            setSelectedMedicine(selectedMedicine)
        }
    }
    // console.log(medicines)


    return (
        <div className=''>
            <div className='py-3 px-5'>
                <h1 className='uppercase text-xl font-bold text-left text-primary'>Medicine List</h1>
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/dashboard/medicineList'>Medicine List</Link></li>
                    </ul>
                </div>
            </div>

            <div className="bg-white mx-5 shadow-xl rounded-xl pt-4">
                <div className='grid grid-cols-5 gap-x-10 px-5'>
                    <div className="form-control w-full col-span-2">
                        <label className="label">
                            <span className="label-text font-bold">Medicine Name<span className='text-red-600 font-bold'>*</span></span>
                        </label>
                        <select onChange={e => setMedicineName(e.target.value)} className="select w-full input-bordered" >
                            <option selected>All Medicine</option>
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
                        <button onClick={() => findMedicine()} className='btn btn-primary text-white px-7'>Find</button>
                        <CSVLink data={medicines} filename={"All-Medicine.csv"} target="_blank" className='btn btn-secondary text-white ml-5 px-5'>Excel</CSVLink>
                    </div>

                    <div className='flex justify-end'>
                        <label htmlFor="add-medicine" onClick={() => { setMedicineModal(true) }} className="btn btn-primary w-40 text-white normal-case mt-9" ><span className="mr-1"><GoPlus /></span>Add Medicine</label>
                    </div>

                </div>

                <div className='py-3 px-5 mt-10 flex justify-between items-center'>
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

                <div className="flex flex-col">
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <div className="">
                                <table className="min-w-full text-center">
                                    <thead className="bg-accent border-b-2">
                                        <tr>
                                            <th scope="col" className="px-5 py-4">
                                                Sl
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Image
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Medicine Name
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Category
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Brand
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Supplier
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Barcode ID
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                MRP Price(BDT)
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Purchase Price(BDT)
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Sale Price(BDT)
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Purchase Quantity
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Sale Quantity
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Available Stock
                                            </th>
                                            <th scope="col" className="px-5 py-4">
                                                Booked Quantity
                                            </th>
                                            <th scope="col" className="px-3 py-4">
                                                Status
                                            </th>
                                            <th scope="col" className="px-3 py-4">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedMedicine ?
                                                <Medicine key={selectedMedicine._id} medicine={selectedMedicine} refetch={refetch} />

                                                : search(medicines)?.slice(0, medicineQuantity)?.map((medicine, index) => <Medicine key={medicine._id} medicine={medicine} index={index} refetch={refetch} />)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {
                    medicineModal && <AddMedicine setMedicineModal={setMedicineModal} refetch={refetch} suppliers={suppliers} />
                }
            </div>


        </div>
    );
};

export default Medicines;