import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const ResetPassword = ({ setResetPassword, refetch, user }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { _id, role } = user
    const onSubmit = data => {

        const newPassword = {
            password: data.password,
            confirmPassword: data.confirmPassword

        }

        // console.log(user)

        fetch(`http://localhost:5000/api/v1/changePassword/${_id}`, {
            method: "PATCH",
            body: JSON.stringify(newPassword),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(user => {
                if (user.status === "success") {
                    setResetPassword(false)
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
            <input type="checkbox" id="reset-password" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="reset-password" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Reset Password</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
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

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="font-semibold">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input w-full input-bordered"
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: 'Confirm Password is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                            </label>
                        </div>

                        <div className="flex justify-center items-center mt-5">
                            <button onClick={() => setResetPassword(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                        </div>

                    </form>
                </div>

            </div >


        </div>
    );
};

export default ResetPassword;