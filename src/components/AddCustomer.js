import React from 'react';
import { useForm } from 'react-hook-form';

const AddCustomer = ({ setAddCustomer }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const customer = {
            customerName: data.customerName,
            phoneNumber: data.phoneNumber,
        }

        fetch(`http://localhost:5001/api/v1/customer`, {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(medicine => console.log(customer))
    }



    return (
        <div className=''>
            <input type="checkbox" id="add-customer" className="modal-toggle" />
            <div className="modal w-full modal-bottom sm:modal-middle">
                <div className="modal-box w-full bg-white">
                    <label htmlFor="add-customer" className="btn btn-sm btn-secondary text-white btn-square absolute right-3 top-3">✕</label>
                    <h3 className="font-bold text-2xl text-primary"> Details about</h3>
                    <div className="card mx-auto">

                        <div className="card-body items-center text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Customer Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Customer Name"
                                        className="input bg-gray-100 w-full "
                                        {...register("customerName", {
                                            required: {
                                                value: true,
                                                message: 'Customer name is required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.customerName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.customerName.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="input bg-gray-100 w-full"
                                        {...register("phoneNumber", {
                                            required: {
                                                value: true,
                                                message: 'Phone number is required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.phoneNumber?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phoneNumber.message}</span>}
                                    </label>
                                </div>

                                <div className="card-actions items-center justify-between">
                                    <button onClick={() => setAddCustomer(false)} className="btn btn-secondary text-white px-10">Close</button>
                                    <input type="submit" className="btn btn-primary text-white px-10" value='Submit' />
                                </div>



                            </form>

                        </div>

                    </div>

                </div>
            </div >
        </div >
    );
};

export default AddCustomer;