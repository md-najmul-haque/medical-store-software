import React from 'react';
import { useForm } from 'react-hook-form';

const ItemInfo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)


    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row justify-start">

                <div className="card-body w-96">
                    <h2 className="text-center text-2xl uppercase font-bold text-primary mb-2">Item Info</h2>

                    <form className='gap-1' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Item Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("itemName", {
                                    required: {
                                        value: true,
                                        message: 'Item name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.itemName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ItemName.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Category Name"
                                className="input input-bordered w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Supplier Name"
                                className="input input-bordered w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Brand Name"
                                className="input input-bordered w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Measurement Unit"
                                className="input input-bordered w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs mb-2">
                            <input
                                type="text"
                                placeholder="Country of Origin"
                                className="input input-bordered w-full max-w-xs"
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


                        <div className="form-control w-full max-w-xs">
                            <input
                                type="number"
                                placeholder="Enter Product Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Product price is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                            </label>
                        </div>




                        <input type="submit" className="btn w-full btn-primary text-white max-w-xs" value='Submit' />

                    </form>

                </div>

            </div>
        </div>
    );
};

export default ItemInfo;