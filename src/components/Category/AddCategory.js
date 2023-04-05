import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddCategory = ({ setCategoryModal, refetch }) => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        console.log(data)

        const image = data.image[0];
        const imageStorageKey = '659c9f3714e59a5aab97b06d91ac3782';
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        const formData = new FormData();
        formData.append('image', image);

        console.log(image)

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                if (result.success === true) {
                    const img = result.data.url

                    const category = {
                        catId: data.catId,
                        categoryName: data.categoryName,
                        image: img,
                        status: data.status,
                    }

                    console.log(category)

                    fetch(`http://localhost:5000/api/v1/category`, {
                        method: "POST",
                        body: JSON.stringify(category),
                        headers: {
                            'content-type': "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(category => {
                            if (category.status === "success") {
                                setCategoryModal(false)
                                reset()
                                refetch()
                                toast.success(category.message)
                            } else {
                                toast.error(category.message)
                            }
                        })
                }
            })

    }

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

                        <div className='grid grid-cols-3 gap-x-5 pl-5 pr-20'>
                            <div className="form-control w-full col-span-2">
                                <label className="label">
                                    <span className="label-text">CAT ID</span>
                                </label>
                                <input
                                    type="number"
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
                                    <span className="font-semibold">Add Category Image</span>
                                </label>
                                <input
                                    type="file"
                                    className="input bg-gray-100 w-full "
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: 'Category image is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                </label>
                            </div>


                        </div>

                        {/* <div className="form-control w-full col-span-2 ml-5 mt-10">
                            <input
                                type="image"
                                alt=""
                                style={{ width: '200px', height: '200px' }}
                                className="input-bordered border-2 shadow-md"
                                {...register("image")} />
                        </div> */}

                        <div className="flex justify-center items-center mt-5">
                            <button onClick={() => setCategoryModal(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                        </div>

                    </form>
                </div>

            </div >


        </div>
    );
};

export default AddCategory;