import React from 'react';

const MedicineDetails = ({ setModal, medicineDetails }) => {
    return (
        <div>
            <input type="checkbox" id="add-project" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="add-project" className="btn btn-sm text-white btn-square absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary"> Details about {medicineDetails.medicineName}</h3>


                </div>
            </div>
        </div >
    );
};

export default MedicineDetails;