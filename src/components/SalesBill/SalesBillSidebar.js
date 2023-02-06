import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SalesBillSidebar = ({ handleMedicine, medicines, setMedicines }) => {
    const [query, setQuery] = useState('')
    const [categorizedMedicines, setCategorizedMedicines] = useState(null)

    const keys = ['medicineName', 'genericName', 'supplierName']

    const medicineCategories = ['All', 'Tablet', 'Capsule', 'Drop', 'Syrup', 'Ointment', 'Injection']

    const search = (data) => {

        return data.filter(medicine => keys.some(key => medicine[key].toLowerCase().includes(query)))
    }

    const getMedicineByCategory = (category) => {
        if (category === 'All') {
            setCategorizedMedicines(null)

        } else {
            const med = medicines.filter(medi => medi.type === category)
            setCategorizedMedicines(med)
        }

    }

    const handleBarcode = e => {
        if (e.key === 'Enter') {
            handleMedicine(e.target.value)
            e.target.value = "";
        }

    }

    return (
        <div style={{ height: "100%" }} className="drawer drawer-mobile bg-white">

            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                <div className='grid grid-cols-2 gap-x-10'>
                    <div class="flex justify-center">
                        <div class="mb-3 xl:w-96">

                            <div className="input-group">
                                <input onChange={event => setQuery(event.target.value)} type="text" placeholder="Search…" className="input input-bordered w-full bg-white  focus:outline-none" />
                                <button className="btn btn-square text-white bg-secondary shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary  focus:shadow-lg border-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <input
                            onKeyDown={(e) => handleBarcode(e)}
                            type="number"
                            placeholder="Scan Barcode"
                            className="input w-full input-bordered bg-white focus:outline-none"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-4'>

                    {
                        categorizedMedicines ?
                            search(categorizedMedicines).map(medicine => {
                                return (
                                    <div onClick={() => handleMedicine(medicine._id)} key={medicine._id} className="card w-32 gap-3 mb-2 bg-base-100 shadow-xl">
                                        <figure><img src={medicine.photoURL} alt="medicine" /></figure>
                                        <h2 className="text-center pb-1">{medicine.medicineName}</h2>
                                    </div>
                                )
                            })

                            : search(medicines).map(medicine => {
                                return (
                                    <div onClick={() => handleMedicine(medicine._id)} key={medicine._id} className="card w-32 gap-3 mb-2 shadow-xl">
                                        <figure><img src={medicine.photoURL} alt="medicine" /></figure>
                                        <h2 className="text-center pb-1">{medicine.medicineName}</h2>
                                    </div>
                                )
                            })
                    }
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 text-base-content">
                    {
                        medicineCategories.map(category => <li><Link onClick={() => getMedicineByCategory(category)} className='btn btn-primary text-white mb-2' to=''>{category}</Link></li>)
                    }

                </ul>

            </div>
        </div>
    );
};

export default SalesBillSidebar;