import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddCustomer = ({ setAddCustomer }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const customer = {
            customerName: data.customerName,
            phoneNumber: data.phoneNumber,
            email: data.email,
            address: data.address,
            area: data.area
        }

        fetch(`http://localhost:5000/api/v1/customer`, {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(customer => {
                if (customer.status === "success") {
                    setAddCustomer(false)
                    reset()
                    toast.success(customer.message)
                } else {
                    toast.error(customer.message)
                }
            })
    }



    return (

        <div className=''>

            <div className='h-screen'>
                <input type="checkbox" id="add-customer" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box min-w-[50%] px-10 bg-white">
                        <div className='border-b-2'>
                            <label htmlFor="add-customerr" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                            <h1 className='uppercase text-left text-primary text-xl font-bold'>Create New User</h1>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='grid grid-cols-2 gap-x-5 px-5 mx-auto'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="font-semibold">Customer Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Customer Name"
                                        className="input bg-gray-100 w-full input-bordered"
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
                                        <span className="font-semibold">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        className="input bg-gray-100 w-full input-bordered"
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
                                        <span className="font-semibold">Customer Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Customer Email"
                                        className="input bg-gray-100 w-full input-bordered"
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
                                        <span className="font-semibold">Address</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        className="input bg-gray-100 w-full input-bordered"
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

                                <div className="form-control w-full col-span-2">
                                    <label className="label">
                                        <span className="font-semibold">Area</span>
                                    </label>
                                    <select className="select bg-gray-100 w-full input-bordered" {...register("area", {
                                        required: {
                                            value: true,
                                            message: 'Area is required'
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


                                <div className="flex justify-center items-center mt-5">
                                    <button onClick={() => setAddCustomer(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                                    <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                                </div>
                            </div>
                        </form>
                    </div>

                </div >

            </div>

        </div >
    );
};

export default AddCustomer;