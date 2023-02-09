import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddSupplier = ({ setSupplierModal }) => {
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
            <input type="checkbox" id="add-supplier" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="add-supplier" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Create New Vendor</h1>
                    </div>

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

                            <div className="card-actions justify-center mt-5">
                                <button onClick={() => setSupplierModal(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                                <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                            </div>
                        </div>
                    </form>

                </div>

            </div>

        </div>
    )
}

export default AddSupplier