import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Registration = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <section class="bg-gray-200 h-screen">
            <div class="flex justify-center items-center flex-wrap h-full text-gray-800">
                <div class="">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="md:px-0">
                            <div class="md:p-12 md:mx-6">
                                <div class="text-center">
                                    <img
                                        class="mx-auto w-48"
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p class="mb-4 mt-5 text-xl">Create your account</p>
                                    <div class=" mb-4">
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Username"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: 'Name is required'
                                                }
                                            }
                                            )}
                                        />
                                        <label className="label py-0">
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                        </label>
                                    </div>
                                    <div class=" mb-4">
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Username"
                                            {...register("userName", {
                                                required: {
                                                    value: true,
                                                    message: 'User name is required'
                                                }
                                            }
                                            )}
                                        />
                                        <label className="label py-0">
                                            {errors.userName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.userName.message}</span>}
                                        </label>
                                    </div>
                                    <div class="mb-4">
                                        <input
                                            type="password"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            placeholder="Password"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is required'
                                                }
                                            }
                                            )}
                                        />
                                        <label className="label py-0">
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                        </label>
                                    </div>
                                    <div class="text-center pt-1 mb-12 pb-1">
                                        <input type="submit" className="btn btn-success btn-sm px-6 rounded w-full mb-3 font-semibold" value='Submit' />
                                    </div>
                                </form>
                                <div class="flex items-center justify-between pb-6">
                                    <p class="mb-0 mr-2">Already have an account?</p>
                                    <Link to='/'
                                        type="button"
                                        class="btn btn-info btn-sm font-semibold rounded"

                                    >
                                        Sign In
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    );
};

export default Registration;