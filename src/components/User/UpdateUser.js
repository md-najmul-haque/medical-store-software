import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateUser = ({ setUpdateUser, refetch, user }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { _id, name, email } = user


    const onSubmit = data => {

        const user = {
            name: data.name,
            email: data.email,
            role: data.role
        }

        // console.log(user)

        fetch(`http://localhost:5000/api/v1/user/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(user => {
                if (user.status === "success") {
                    setUpdateUser(false)
                    reset()
                    refetch()
                    toast.success(user.message)
                } else {
                    toast.error(user.message)
                }
            })
    }


    return (
        <div className='h-screen'>
            <input type="checkbox" id="update-user" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="update-user" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Update User</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className='grid grid-cols-2 gap-x-5 px-5 mx-auto'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="font-semibold">User Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter User Name"
                                    className="input bg-gray-100 w-full input-bordered"
                                    value={name}
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
                                    type="email"
                                    placeholder="Enter User Email"
                                    className="input bg-gray-100 w-full input-bordered"
                                    value={email}
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

                            <div className="form-control w-full col-span-2">
                                <label className="label">
                                    <span className="font-semibold">Role</span>
                                </label>
                                <select className="select w-full input-bordered" {...register("role")}>
                                    <option selected>Stuff</option>
                                    <option>Manager</option>
                                    <option>Admin</option>
                                </select>
                            </div>

                        </div>



                        <div className="flex justify-center items-center mt-5">
                            <button onClick={() => setUpdateUser(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                        </div>

                    </form>
                </div>

            </div >


        </div>
    );
};

export default UpdateUser;