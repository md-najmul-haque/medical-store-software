import React from 'react';
import { useForm } from 'react-hook-form';

const CreateSalesBill = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div>
            <div className='flex justify-between items-center bg-gray-100 py-3 px-10 border-b-2'>
                <h1 className='uppercase text-xl font-bold'>Create sales bill</h1>
                <button className='btn btn-info px-28'>Back</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-5'>

                    <div className='grid grid-cols-3 gap-x-5 pl-5 pr-20'>
                        <div className='grid grid-cols-3 col-span-2 gap-x-10'>
                            <div className="form-control w-full col-span-2">
                                <label className="label">
                                    <span className="label-text">Requisition From App #</span>
                                </label>
                                <select className="select w-full input-bordered" {...register("memoNumber")}>
                                    <option disabled selected>Choose App Memo Number</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Invoice Data</span>
                                </label>
                                <input
                                    type="date"
                                    defaultValue={Date.now()}
                                    className="input bg-gray-100 w-full "
                                    {...register("startData", {
                                        valueAsDate: true,
                                    })}
                                />
                            </div>
                        </div>

                        <div className='grid grid-cols-3 col-span-2 gap-x-10'>
                            <div className="form-control w-full">
                                <label className="label font-bold">
                                    <span className="label-text">Customer No</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Customer No"
                                    className="input w-full input-bordered"
                                    {...register("customerNo", {
                                        required: {
                                            value: true,
                                            message: 'Customer No is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.customerNo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.customerNo.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full col-span-2">
                                <label className="label font-bold">
                                    <span className="label-text">Customer Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Customer Name"
                                    className="input w-full input-bordered"
                                    {...register("customerName", {
                                        required: {
                                            value: true,
                                            message: 'Customer Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.customerName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.customerName.message}</span>}
                                </label>
                            </div>
                        </div>

                        <div className='grid grid-cols-3 col-span-2 gap-x-10'>
                            <div className="form-control w-full">
                                <label className="label font-bold">
                                    <span className="label-text">Barcode</span>
                                </label>
                                <input
                                    type="qr"
                                    placeholder="Scan Barcode"
                                    className="input w-full input-bordered"
                                    {...register("barcode", {
                                        required: {
                                            value: true,
                                            message: 'Barcode No is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.barcode?.type === 'required' && <span className="label-text-alt text-red-500">{errors.barcode.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full col-span-2">
                                <label className="label font-bold">
                                    <span className="label-text">Add Product</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Add Product / Barcode ID"
                                    className="input w-full input-bordered"
                                    {...register("customerName", {
                                        required: {
                                            value: true,
                                            message: 'Customer Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.customerName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.customerName.message}</span>}
                                </label>
                            </div>
                        </div>


                    </div>


                    <div className='flex justify-between items-center ml-5 mt-5'>
                        <button className='btn btn-info'>Back</button>
                        <input type="submit" className="btn btn-success text-white ml-10" value='Save' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateSalesBill;