import React from 'react';
import { useForm } from 'react-hook-form';

const CategoryDetails = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div>
            <h1 className='uppercase text-left text-xl font-bold bg-gray-100 py-5 ml-5 border-b-2'>Category Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=''>
                    <div className='grid grid-cols-3 gap-x-5 pl-5 pr-20'>
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text">CAT ID</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Enter CAT ID"
                                className="input bg-gray-100 w-full input-bordered"
                                {...register("catId", {
                                    required: {
                                        value: true,
                                        message: 'CAT id is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.catId?.type === 'required' && <span className="label-text-alt text-red-500">{errors.catId.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Status</span>
                            </label>
                            <select className="select w-full input-bordered" {...register("status")}>
                                <option selected>Active</option>
                                <option>Inactive</option>
                            </select>
                        </div>

                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Category Name"
                                className="input w-full input-bordered"
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
                        <div className="form-control w-full col-span-2">
                            <label className="label">
                                <span className="label-text">Add Category Image</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Status"
                                className="input w-full shadow-md"
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

                    </div>

                    <div className="form-control w-full col-span-2 ml-5 mt-10">
                        <input
                            type="image"
                            alt="category-image"
                            style={{ width: '200px', height: '200px' }}
                            className="input-bordered border-2 shadow-md"
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




                    <div className='flex ml-5'>
                        <button className='btn btn-accent'>Cancel</button>
                        <input type="submit" className="btn btn-success text-white ml-10" value='Save' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CategoryDetails;