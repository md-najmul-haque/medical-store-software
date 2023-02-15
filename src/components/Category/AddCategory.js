import React from 'react';
import { useForm } from 'react-hook-form';


const AddCategory = ({ setCategoryModal }) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className='h-screen'>
            <input type="checkbox" id="add-category" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="add-category" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Create New Category</h1>
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

                            <div className="flex justify-center items-center mt-5">
                                <button onClick={() => setCategoryModal(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                                <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                            </div>
                        </div>
                    </form>
                </div>

            </div >


        </div>
    );
};

export default AddCategory;