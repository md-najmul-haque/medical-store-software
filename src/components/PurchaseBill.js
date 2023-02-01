import React from 'react';
import { useForm } from 'react-hook-form';

const PurchaseBill = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className='bg-white h-screen'>
            <div className='flex justify-between items-center bg-base-100 py-3 px-5 border-b-2'>
                <h1 className='uppercase text-xl font-bold'>Create Purchase Memo</h1>
                <button className='btn btn-secondary px-12'>Back</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-5'>
                    <div className='grid grid-cols-5 gap-x-10'>
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text font-bold">Supplier Name<span className='text-red-600 font-bold'>*</span></span>
                            </label>
                            <select className="select w-full input-bordered" {...register("memoNumber")}>
                                <option disabled selected>Supplier Memo</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text font-bold">Data of Invoice<span className='text-red-600 font-bold'>*</span></span>
                            </label>
                            <input
                                type="date"
                                defaultValue={Date.now()}
                                className="input w-full input-bordered"
                                {...register("startData", {
                                    valueAsDate: true,
                                })}
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label font-bold">
                                <span className="label-text">Memo No</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Memo No"
                                className="input w-full input-bordered"
                                {...register("memo")} />
                            <label className="label">
                                {errors.memo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.memo.message}</span>}
                            </label>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 col-span-2 mb-5 gap-x-10'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-bold">Add Product<span className='text-red-600 font-bold'>*</span></span>
                            </label>
                            <select className="select w-full input-bordered" {...register("addProduct")}>
                                <option disabled selected>Product Name / Barcode ID</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead className='py-10'>
                                <tr>
                                    <th></th>
                                    <th className='border'>Barcode ID</th>
                                    <th className='border'>Product</th>
                                    <th className='border'>Stock</th>
                                    <th className='border'>Purchase</th>
                                    <th className='border'>MRP Price (BDT)</th>
                                    <th className='border'>Purchase Price (BDT)</th>
                                    <th className='border'>Sale Price (BDT)</th>
                                    <th className='border'>Total (BDT)</th>
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


                    </div>

                    <div className='flex justify-end items-center ml-5 my-5'>
                        <input type="submit" className="btn btn-primary text-white px-12" value='Save' />
                    </div>

                    <div class="flex justify-end items-center mb-2">
                        <h2 className='p-3 font-semibold'>Grand Total: </h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input bg-white w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>

                    <div class="flex justify-end items-center mb-2 ">
                        <h2 className='p-3 font-semibold '> Discount: </h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input bg-white w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>

                    <div class="flex justify-end items-center mb-2">
                        <h2 className='p-3 font-semibold'>Net Payable:</h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input bg-white w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>
                </div>
            </form>


        </div>
    );
};

export default PurchaseBill;