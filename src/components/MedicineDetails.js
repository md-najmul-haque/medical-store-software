import React from 'react';

const MedicineDetails = ({ setModal, medicineDetails }) => {
    return (
        <div className=''>
            <input type="checkbox" id="view-medicine" className="modal-toggle" />
            <div className="modal w-full modal-bottom sm:modal-middle">
                <div className="modal-box w-full bg-white">
                    <label htmlFor="view-medicine" className="btn btn-sm btn-secondary text-white btn-square absolute right-3 top-3">✕</label>
                    <h3 className="font-bold text-2xl text-primary"> Details about {medicineDetails.medicineName}</h3>
                    <div className="card mx-auto">
                        <figure className="px-10 pt-10">
                            <img src={medicineDetails.photoURL} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-lg text-primary">Medicine Name: {medicineDetails.medicineName}</h2>
                            <p>Generic Name: {medicineDetails.genericName}</p>
                            <p>Supplier Name: {medicineDetails.supplierName}</p>
                            <p>Medicine Type: {medicineDetails.type}</p>
                            <p>Medicine Price: {medicineDetails.price}</p>
                            <p>Available Quantity: {medicineDetails.quantity}</p>
                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={() => setModal(false)} className="btn btn-secondary right-3">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default MedicineDetails;