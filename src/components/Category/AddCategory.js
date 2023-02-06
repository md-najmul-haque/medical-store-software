import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const AddCategory = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className='bg-white h-screen'>
            <div className='bg-base-100 py-4 px-5 border-b-2 flex items-center justify-between'>
                <h1 className='uppercase text-left text-xl font-bold'>Category Details</h1>
                <Link to='/' className="btn btn-primary text-white normal-case px-10 ml-5" >Back</Link>
            </div>

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
                                        message: 'CAT ID is required'
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
                                        message: 'Category image is required'
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
                            alt=""
                            style={{ width: '200px', height: '200px' }}
                            className="input-bordered border-2 shadow-md"
                            {...register("image")} />
                    </div>

                    <div className='flex ml-5 mt-5'>
                        <button className='btn btn-primary text-white'>Cancel</button>
                        <input type="submit" className="btn btn-secondary px-6 text-white ml-8" value='Save' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddCategory;