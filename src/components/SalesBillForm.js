import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillEye } from 'react-icons/ai';

const SalesBillForm = ({ medicine, setMedicine, total, setTotal, totalDiscount, setTotalDiscount, vat, setVat }) => {
    const [customerData, setCustomerData] = useState([])
    const [customerNumber, setCustomerNumber] = useState('')
    const [givenAmount, setGivenAmount] = useState(0)
    const [changeAmount, setChangeAmount] = useState(0)
    const [vatPercentage, setVatPercentage] = useState(0)


    const findCustomer = () => {
        if (customerNumber) {
            fetch(`customer.json`)
                .then(res => res.json())
                .then(data => {
                    const selectedCustomer = data.filter(customer => customer.customerNumber === customerNumber)
                    setCustomerData(selectedCustomer)
                    // console.log(selectedCustomer)
                })

            // console.log(customerData)
        }
    }



    const handleDiscount = (e, id) => {
        const discountedMedicine = medicine.find(med => med._id === id)
        const discount = e.target.value
        let updatedMedicine = { ...discountedMedicine, discount: discount }

        //calculate total discount
        if (updatedMedicine.discountedValue) {
            const newDiscountedValue = updatedMedicine.price * (updatedMedicine.discount / 100)
            setTotalDiscount(totalDiscount - updatedMedicine?.discountedValue + newDiscountedValue)
            updatedMedicine = { ...updatedMedicine, discountedValue: newDiscountedValue }
        } else {
            const discountedValue = updatedMedicine.price * (updatedMedicine.discount / 100)
            updatedMedicine = { ...updatedMedicine, discountedValue: discountedValue }
            setTotalDiscount(totalDiscount + updatedMedicine?.discountedValue)


        }

        //remove earlier medicine and add updated medicine
        let discountedMedicineIndex = medicine.findIndex(med => med._id === id);
        medicine.splice(discountedMedicineIndex, 1)
        medicine = Array.from(medicine);
        medicine?.splice(discountedMedicineIndex, 0, updatedMedicine);

        setMedicine(medicine)
        console.log(totalDiscount)
    }
    const handleVat = (e) => {
        const vatPercent = e.target.value
        setVatPercentage(vatPercent / 100)
        const totalVat = total * (vatPercent / 100)
        setVat(totalVat)
    }

    const handleAmount = e => {

        const amount = e.target.value
        setGivenAmount(amount)
        const changeAmount = amount - (total - totalDiscount + vat)
        console.log(total)
        console.log(totalDiscount)
        console.log(vat)

        setChangeAmount(changeAmount)
    }

    const removeMedicine = (id) => {
        const removeMedicine = medicine.find(med => med._id === id)
        const removeMedicineVat = removeMedicine.price * vatPercentage

        const restMedicine = medicine.filter(med => med._id !== id)


        //set total value
        if (removeMedicine.discountedValue) {
            setTotalDiscount(totalDiscount - removeMedicine.discountedValue)
            setTotal(total - removeMedicine.price - removeMedicineVat)

        } else {
            setTotal(total - removeMedicine.price - removeMedicineVat)

        }
        setMedicine(restMedicine)

        if (removeMedicine.discountedValue) {
            const changeAmount = givenAmount - ((total - totalDiscount + vat) - (removeMedicine.price - removeMedicine.discountedValue + removeMedicineVat))
            setChangeAmount(changeAmount)
        } else {
            const changeAmount = givenAmount - ((total - totalDiscount + vat) - (removeMedicine.price + removeMedicineVat))
            setChangeAmount(changeAmount)
        }

        console.log('remove', givenAmount, total)
    }

    return (
        <div className='mr-5'>
            <div className='grid grid-cols-2 gap-x-10'>

                <div className="form-control w-full">
                    <input
                        type="text"
                        placeholder="Customer Name / Phone Number"
                        className="input w-full input-bordered focus:outline-none"
                        defaultValue={customerData[0]?.customerName}

                    />
                </div>

                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search…" className="input input-bordered w-full focus:outline-none" onChange={(e) => setCustomerNumber(e.target.value)} />
                        <button onClick={() => findCustomer()} className="btn btn-square bg-success shadow-md hover:bg-success hover:shadow-lg focus:bg-success  focus:shadow-lg border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>

                {/* <div class="flex justify-center">
                    <div class="mb-3">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="text" name='mobile' class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-success focus:outline-none" placeholder="Mobile" aria-label="Search" aria-describedby="button-addon2" />
                            <button type='submit' class="btn inline-block px-6 py-2.5 bg-success text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-success hover:shadow-lg focus:bg-success  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-success active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                <BiPlusMedical />
                            </button>
                        </div>
                    </div>
                </div> */}

            </div>

            <div className="overflow-x-auto mt-10">
                <table className="table w-full border">
                    <thead className='py-10'>
                        <tr>
                            <th>Medicine Information</th>
                            <th className='border'>Batch</th>
                            <th className='border'>Expire date</th>
                            <th className='border'>Quantity</th>
                            <th className='border px-5'>Price</th>
                            <th className='border'>Discount %</th>
                            <th className='border px-10'>Total</th>
                            <th className='border'>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            medicine?.map(med => {
                                return (
                                    <tr key={med?._id} >
                                        <th className='border p-1 '>
                                            <input
                                                type="text"
                                                className="input w-full input-bordered focus:outline-none"
                                                defaultValue={med?.medicineName}
                                            />
                                        </th>
                                        <td className='border p-1'>
                                            <input
                                                type="text"
                                                className="input w-full px-0 input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="date"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                                value={med?.defaultQuantity}
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                id="checKPrice"
                                                className="input w-full max-w-xs input-bordered focus:outline-none px-2 "
                                                value={med?.price}
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                                onChange={(e) => handleDiscount(e, med._id)}
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <input
                                                type="number"
                                                name='total'
                                                className="input w-full max-w-xs input-bordered focus:outline-none"
                                                value={(med?.defaultQuantity * med?.price) - ((med?.defaultQuantity * med?.price) * (med?.discount ? Number(`${med?.discount / 100}`) : 0))}
                                            />
                                        </td>
                                        <td className='border p-1'>
                                            <button onClick={() => removeMedicine(med._id)} className='btn btn-sm bg-red-200 hover:bg-red-300 border-none text-red-600'><RiDeleteBin5Fill /></button>
                                            <button className='btn btn-sm bg-green-200 hover:bg-green-300 border-none text-green-700 ml-2'><AiFillEye /></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Total Discount: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        value={totalDiscount}

                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Total VAT(%): </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        onChange={(e) => handleVat(e)}
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Grand Total: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        value={total - totalDiscount + vat}
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>Given Amount: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        onChange={e => handleAmount(e)}
                    />
                </div>

                <div class="flex justify-end items-center mb-2">
                    <h2 className='p-3 font-semibold'>change: </h2>
                    <input
                        type="number"
                        placeholder='00.0'
                        className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        value={changeAmount}
                    />
                </div>

            </div>
        </div>
    );
};

export default SalesBillForm;