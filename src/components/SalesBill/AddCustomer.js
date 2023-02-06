import React from 'react';
import { useForm } from 'react-hook-form';

const AddCustomer = ({ setAddCustomer }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const customer = {
            customerName: data.customerName,
            phoneNumber: data.phoneNumber,
            address: data.address,
            area: data.area
        }

        fetch(`http://localhost:5001/api/v1/customer`, {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(medicine => {
                setAddCustomer(false)
                reset()
                console.log(customer)
            })
    }



    return (
        <div className=''>
            <input type="checkbox" id="add-customer" className="modal-toggle" />
            <div className="modal w-full modal-bottom sm:modal-middle">
                <div className="modal-box w-full bg-white">
                    <label htmlFor="add-customer" className="btn btn-sm btn-secondary text-white btn-square absolute right-3 top-3">✕</label>
                    <h3 className="font-bold text-2xl text-primary"> Add New Customer </h3>


                    <div className="card-body p-3 items-center text-center mx-auto">
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

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Customer Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Customer Email"
                                    className="input bg-gray-100 w-full "
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: "Please provide a valid email"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Address"
                                    className="input bg-gray-100 w-full"
                                    {...register("address", {
                                        required: {
                                            value: true,
                                            message: 'Address is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Area</span>
                                </label>
                                <select className="select bg-gray-100 w-full " {...register("area", {
                                    required: {
                                        value: true,
                                        message: 'Phone number is required'
                                    }
                                })}>
                                    <option disabled selected>Area</option>
                                    <option>Mirpur</option>
                                    <option>Mohammadpur</option>
                                    <option>Banani</option>
                                </select>
                                <label className="label">
                                    {errors.area?.type === 'required' && <span className="label-text-alt text-red-500">{errors.area.message}</span>}
                                </label>
                            </div>

                            <div className="card-actions items-center justify-between">
                                <button onClick={() => setAddCustomer(false)} className="btn btn-secondary text-white px-10">Close</button>
                                <input type="submit" className="btn btn-primary text-white px-10" value='Submit' />
                            </div>

                        </form>

                    </div>



                </div>
            </div >
        </div >
    );
};

export default AddCustomer;