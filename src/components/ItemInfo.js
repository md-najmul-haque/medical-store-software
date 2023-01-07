import React from 'react';
import { useForm } from 'react-hook-form';

const ItemInfo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)


    return (
        <div className="container mx-auto mt-3">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Item Name"
                            className="input bg-gray-100 w-full "
                            {...register("itemName", {
                                required: {
                                    value: true,
                                    message: 'Item name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.itemName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.itemName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Category Name"
                            className="input bg-gray-100 w-full "
                            {...register("categoryName", {
                                required: {
                                    value: true,
                                    message: 'Category name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.categoryName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categoryName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Supplier Name"
                            className="input bg-gray-100 w-full "
                            {...register("supplierName", {
                                required: {
                                    value: true,
                                    message: 'Supplier name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.supplierName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Brand Name"
                            className="input bg-gray-100 w-full "
                            {...register("brandName", {
                                required: {
                                    value: true,
                                    message: 'Brand name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.brandName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brandName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Measurement Unit</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Measurement Unit"
                            className="input bg-gray-100 w-full "
                            {...register("unit", {
                                required: {
                                    value: true,
                                    message: 'Measurement unit is required'
                                }
                            })} />
                        <label className="label">
                            {errors.unit?.type === 'required' && <span className="label-text-alt text-red-500">{errors.unit.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Country of Origin</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Country of Origin"
                            className="input bg-gray-100 w-full "
                            {...register("origin", {
                                required: {
                                    value: true,
                                    message: 'Country of origin is required'
                                }
                            })} />
                        <label className="label">
                            {errors.origin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.origin.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Lot Control</span>
                        </label>
                        <select className="select bg-gray-100 w-full " {...register("lotControl")}>
                            <option disabled selected>Lot Control?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Remarks</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Remarks"
                            className="input bg-gray-100 w-full "
                            {...register("remarks")} />
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

                    <input type="submit" className="btn w-full btn-primary text-white mt-5" value='Submit' />
                </div>
            </form>

        </div>

    );
};

export default ItemInfo;