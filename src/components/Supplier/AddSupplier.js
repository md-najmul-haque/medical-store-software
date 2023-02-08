import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddSupplier = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const supplier = {
            supplierId: data.supplierId,
            supplierName: data.supplierName,
            supplierPhoneNo: data.supplierPhoneNo,
            email: data.email,
            address: data.address,
            contactPerson: data.contactPerson,
            contactPersonPhoneNo: data.contactPersonPhoneNo,
            status: data.status,
        }

        fetch(`http://localhost:5000/api/v1/supplier`, {
            method: "POST",
            body: JSON.stringify(supplier),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(supplier => {
                if (supplier.status === "success") {
                    reset()
                    toast.success('Supplier data added successfully')
                    console.log(supplier)
                } else {
                    toast.error('Fail to saved customer data')
                }
            })
    }

    return (
        <div className='bg-white'>
            <div className="h-screen">
                <div className='bg-base-100 py-4 px-5 border-b-2'>
                    <h1 className='uppercase text-primary text-left text-xl font-bold'>Add Supplier</h1>
                </div>
                <div className='container mx-auto'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier ID</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Supplier ID"
                                    className="input bg-gray-100 w-full"
                                    {...register("supplierId", {
                                        required: {
                                            value: true,
                                            message: 'Supplier id is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.supplierId?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierId.message}</span>}
                                </label>
                            </div>

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier Name</span>
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


                            <div className="form-control  max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="input bg-gray-100 w-full"
                                    {...register("supplierPhoneNo", {
                                        required: {
                                            value: true,
                                            message: 'Supplier phone number is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.supplierPhoneNo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierPhoneNo.message}</span>}
                                </label>
                            </div>

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter Supplier Email"
                                    className="input bg-gray-100 w-full"
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

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Address</span>
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

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Contact Person</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contact Person"
                                    className="input bg-gray-100 w-full"
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

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Contact Person Mobile</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Contact Person Mobile"
                                    className="input bg-gray-100 w-full"
                                    {...register("contactPersonPhoneNo", {
                                        required: {
                                            value: true,
                                            message: 'Country of origin is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.contactPersonMobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.contactPersonMobile.message}</span>}
                                </label>
                            </div>

                            <div className="form-control max-w-xl mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Status</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Status"
                                    className="input bg-gray-100 w-full"
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

                            <div className='flex justify-center items-center max-w-xl mx-auto'>
                                <Link to='/supplierList' className="btn btn-primary text-white px-10 ml-5" >Back</Link>
                                <input type="submit" className="btn btn-secondary ml-5 text-white px-10" value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddSupplier