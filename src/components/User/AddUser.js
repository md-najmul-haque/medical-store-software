import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';


const AddUser = ({ setUser }) => {

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

                    const user = {
                        name: data.name,
                        email: data.email,
                        role: data.role,
                        password: data.password,
                        image: img
                    }

                    console.log(user)

                    fetch(`http://localhost:5000/api/v1/category`, {
                        method: "POST",
                        body: JSON.stringify(user),
                        headers: {
                            'content-type': "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(category => {
                            if (category.status === "success") {
                                setUser(false)
                                reset()
                                toast.success("User Data Saved Successfully")
                            } else {
                                toast.error('Fail to saved User data. Please try again later')
                            }
                        })
                }
            })

    }

    return (
        <div className='h-screen'>
            <input type="checkbox" id="add-user" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="add-user" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Create New User</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='grid grid-cols-2 gap-x-5 pl-5 pr-20'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="font-semibold">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter User Name"
                                    className="input bg-gray-100 w-full input-bordered"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="font-semibold">User Email</span>
                                </label>
                                <input
                                    type="name"
                                    placeholder="Enter User Email"
                                    className="input bg-gray-100 w-full input-bordered"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="font-semibold">Status</span>
                                </label>
                                <select className="select w-full input-bordered" {...register("status")}>
                                    <option selected>Stuff</option>
                                    <option>Manager</option>
                                    <option>Admin</option>
                                </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="font-semibold">Password</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Password"
                                    className="input w-full input-bordered"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full col-span-2">
                                <label className="label">
                                    <span className="font-semibold">User Image</span>
                                </label>
                                <input
                                    type="file"
                                    className="input bg-gray-100 w-full "
                                    {...register("image")} />
                            </div>

                        </div>



                        <div className="flex justify-center items-center mt-5">
                            <button onClick={() => setUser(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                        </div>

                    </form>
                </div>

            </div >


        </div>
    );
};

export default AddUser;