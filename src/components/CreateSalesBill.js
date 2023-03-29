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
                                            message: 'Barcode is required'
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
                                    {...register("addProduct", {
                                        required: {
                                            value: true,
                                            message: 'Product is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.addProduct?.type === 'required' && <span className="label-text-alt text-red-500">{errors.addProduct.message}</span>}
                                </label>
                            </div>
                        </div>


                    </div>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className='py-10'>
                                <tr>
                                    <th></th>
                                    <th className='border'>Barcode ID</th>
                                    <th className='border'>Item Description</th>
                                    <th className='border'>MRP Price</th>
                                    <th className='border'>Quantity</th>
                                    <th className='border'>Unit Price</th>
                                    <th className='border'>Total</th>
                                </tr>
                            </thead>
                            {/* <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Littel, Schaden and Vandervort</td>
                                    <td>Canada</td>
                                    <td>12/16/2020</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody> */}
                        </table>
                        <div className="flex justify-end items-center mt-10  ">
                            <h2 className='bg-gray-100 p-3'>Total Amount</h2>
                            <input
                                type="number"
                                placeholder='00.0'
                                className="input w-full max-w-xs input-bordered text-right"
                                {...register("total")} />
                        </div>

                    </div>


                    <div className='flex justify-between items-center ml-5 mt-5'>
                        <button className='btn btn-info px-10'>Back</button>
                        <input type="submit" className="btn btn-success text-white px-10 ml-10" value='Save' />
                    </div>
                </div>
            </form>


        </div>
    );
};

export default CreateSalesBill;