import React from 'react'
import { useForm } from 'react-hook-form';

const Supplier = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className="container mx-auto mt-3">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Supplier Name"
                            className="input bg-gray-100 w-full "
                            {...register("supplierName", {
                                required: {
                                    value: true,
                                    message: 'Supplier Name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.supplierName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Address"
                            className="input bg-gray-100 w-full "
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
                            <span className="label-text">Supplier Phone Number</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="input bg-gray-100 w-full "
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Supplier phone number is required'
                                }
                            })} />
                        <label className="label">
                            {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Supplier Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Supplier Email"
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

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Contact Person</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Contact Person"
                            className="input bg-gray-100 w-full "
                            {...register("contactPerson", {
                                required: {
                                    value: true,
                                    message: 'Contact Person is required'
                                }
                            })} />
                        <label className="label">
                            {errors.contactPerson?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contactPerson.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Contact Person Mobile</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Contact Person Mobile"
                            className="input bg-gray-100 w-full "
                            {...register("contactPersonMobile", {
                                required: {
                                    value: true,
                                    message: 'Country of origin is required'
                                }
                            })} />
                        <label className="label">
                            {errors.contactPersonMobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contactPersonMobile.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Status"
                            className="input bg-gray-100 w-full "
                            {...register("status", {
                                required: {
                                    value: true,
                                    message: 'Status is required'
                                }
                            })} />
                        <label className="label">
                            {errors.status?.type === 'required' && <span className="label-text-alt text-red-500">{errors.status.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Start Data</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Start Date"
                            className="input bg-gray-100 w-full "
                            {...register("startData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">End Data</span>
                        </label>
                        <input
                            type="date"
                            placeholder="End Date"
                            className="input bg-gray-100 w-full "
                            {...register("endData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <input type="submit" className="btn w-full btn-accent text-white mt-5" value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default Supplier