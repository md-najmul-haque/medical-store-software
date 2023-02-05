import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import useMedicine from '../hooks/useMedicine';
import { ImCross } from 'react-icons/im';

const StockUpdate = () => {
    let [medicine, setMedicine] = useState([])
    const [medicines, setMedicines] = useMedicine()

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => { console.log(data) }

    const handleBarcode = e => {
        if (e.key === 'Enter') {
            const barcodeId = e.target.value
            const selectedMedicine = medicines.find(medicine => medicine._id === barcodeId)
            const updatedMedicine = [...medicine, selectedMedicine]
            setMedicine(updatedMedicine)
            e.target.value = ''
        }

    }


    const handleMedicine = e => {
        const name = e.target.value
        const selectedMedicine = medicines.find(medicine => medicine.medicineName === name)
        const updatedMedicine = [...medicine, selectedMedicine]
        setMedicine(updatedMedicine)
        e.target.value = ''
    }

    return (
        <div className='bg-white h-screen'>
            <div className='bg-base-100 py-3 px-5 border-b-2'>
                <h1 className='uppercase text-xl font-bold text-left'>Stock Update</h1>
            </div>

            <div className='grid grid-cols-4 gap-5 m-5'>
                <div className="form-control w-full">
                    <input
                        onKeyDown={(e) => handleBarcode(e)}
                        type="number"
                        placeholder="Search Barcode"
                        className="input w-full input-bordered bg-white focus:outline-none"
                    />
                </div>

                <div className="form-control w-full col-span-2">

                    <select onChange={(e) => handleMedicine(e)} className="select w-full input-bordered" >
                        <option selected>Medicine Name</option>
                        {
                            medicines?.map(medicine => {
                                return <option key={medicine._id}>{medicine.medicineName}</option>

                            })
                        }
                    </select>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-5'>
                    <div className=''>

                        <table className="table w-full">
                            <thead className='py-10'>
                                <tr>
                                    <th></th>
                                    <th className='border'>Barcode ID</th>
                                    <th className='border'>Medicine Name</th>
                                    <th className='border'>Stock Quantity</th>
                                    <th className='border'>Adjusted Quantity</th>
                                    <th className='border'>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    medicine?.map(med => {
                                        return (
                                            <tr className='border'>
                                                <td className='bg-white border-2 text-red-600 text-center pl-5' ><ImCross /></td>
                                                <td className='bg-white border-2 p-0'>
                                                    <div className="form-control w-full">

                                                        <input
                                                            onKeyDown={(e) => handleBarcode(e)}
                                                            type="number"
                                                            placeholder="Search Barcode"
                                                            value={med._id}
                                                            className="input w-full input-bordered rounded bg-base-100 focus:outline-none"
                                                        />

                                                    </div>
                                                </td>
                                                <td className='border-2 p-0'>
                                                    <input
                                                        type="text"
                                                        className="input w-full bg-base-100 rounded input-bordered"
                                                        value={med.medicineName}
                                                    />
                                                </td>
                                                <td className='border-2  p-0'>
                                                    <input
                                                        type="number"
                                                        className="input w-full bg-base-100 input-bordered"
                                                        value={med.quantity} />
                                                </td>
                                                <td className='bg-white border-2  p-0'>
                                                    <input
                                                        type="number"
                                                        placeholder='Enter Quantity'
                                                        className="input w-full rounded input-bordered bg-white"
                                                        {...register("adjustedQuantity")} />
                                                </td>
                                                <td className='bg-white border-2 p-0'>
                                                    <input
                                                        type="text"
                                                        placeholder='remarks'
                                                        className="input w-full rounded input-bordered bg-white"
                                                        {...register("adjustedQuantity")} />
                                                </td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>

                        </table>
                        <div className='flex justify-end item-center my-5'>
                            <button className='btn btn-secondary text-white'>Submit</button>
                        </div>

                    </div>

                    <div>
                        <div className='bg-base-100 py-3 px-5 border-b-2 flex justify-between items-center'>
                            <div className='flex'>
                                <h1 className='uppercase text-xl font-bold text-left flex-none'>Stock Adjustment History</h1>
                                <select className="input-bordered bg-base-200 ml-5" >
                                    <option selected>All</option>
                                </select>
                            </div>
                            <button className='btn btn-primary text-white'>Excel</button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead className='py-10 bg-info'>
                                    <tr className='bg-info'>
                                        <th className='bg-sky-300'>SL</th>
                                        <th className='border bg-sky-300'>Date</th>
                                        <th className='border bg-sky-300'>Medicine Name</th>
                                        <th className='border bg-sky-300'>Stock</th>
                                        <th className='border bg-sky-300'>Barcode ID</th>
                                        <th className='border bg-sky-300'>Previous QTY</th>
                                        <th className='border bg-sky-300'>Stock</th>
                                        <th className='border bg-sky-300'>Remarks</th>
                                        <th className='border bg-sky-300'>Status</th>
                                        <th className='border bg-sky-300'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border'>
                                        <th className='bg-white border-2 flex justify-center items-center text-red-600'></th>
                                        <td className='bg-white border-2'></td>
                                        <td className='bg-gray-100 border-2'></td>
                                        <td className='bg-gray-100 border-2'></td>
                                        <td className='bg-white border-2'></td>
                                        <td className='bg-white border-2'></td>
                                        <td className='bg-white border-2'></td>
                                        <td className='bg-white border-2'></td>
                                        <th className='border'></th>
                                        <th className='border'></th>
                                    </tr>
                                </tbody>
                            </table>


                        </div>

                    </div>
                </div>
            </form>


        </div>
    )

}

export default StockUpdate;