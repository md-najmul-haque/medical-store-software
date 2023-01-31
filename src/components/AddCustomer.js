import React from 'react';

const AddCustomer = ({ setAddCustomer }) => {
    return (
        <div className=''>
            <input type="checkbox" id="add-customer" className="modal-toggle" />
            <div className="modal w-full modal-bottom sm:modal-middle">
                <div className="modal-box w-full bg-white">
                    <label htmlFor="add-customer" className="btn btn-sm btn-secondary text-white btn-square absolute right-3 top-3">✕</label>
                    <h3 className="font-bold text-2xl text-primary"> Details about</h3>
                    <div className="card mx-auto">

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-lg text-primary">Medicine Name: </h2>

                        </div>
                        <div className="card-actions justify-end">
                            <button onClick={() => setAddCustomer(false)} className="btn btn-secondary right-3">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default AddCustomer;