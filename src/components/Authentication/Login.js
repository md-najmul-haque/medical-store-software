import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../assets/logo.png'


const Login = () => {
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const user = {
            email: data.email,
            password: data.password
        }

        // console.log(user)

        fetch(`http://localhost:5000/api/v1/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'content-type': "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.status === "success") {
                    reset()
                    toast.success(data.message)
                    localStorage.setItem("token", data.token);
                    navigate("/dashboard")
                } else {
                    toast.error(data.message)
                }
            })

    }

    return (
        <section className="bg-gray-200 h-screen">
            <div className="flex justify-center items-center flex-wrap h-full text-gray-800">
                <div className="">
                    <div className="block bg-white shadow-lg rounded-lg">
                        <div className="md:px-0">
                            <div className="md:p-12 md:mx-6">
                                <div className="text-center">
                                    <img
                                        className="mx-auto w-48"
                                        src={logo}
                                        alt="logo"
                                    />
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p className="mb-4 mt-5 text-xl">Please login to your account</p>
                                    <div className=" mb-4">
                                        <input
                                            type="text"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput1"
                                            placeholder="Enter Email"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: 'Email is required'
                                                }
                                            }
                                            )}
                                        />
                                        <label className="label py-0">
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                        </label>
                                    </div>
                                    <div className="mb-4">
                                        <input
                                            type="password"
                                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
                                    <div className="text-center pt-1 mb-12 pb-1">
                                        <input type="submit" className="btn btn-success btn-sm px-6 rounded w-full mb-3 font-semibold" value='Login' />
                                        <a className="text-red-600" href="#!">Forgot password?</a>
                                    </div>
                                </form>
                                <div className="flex items-center justify-between pb-6">
                                    <p className="mb-0 mr-2">Don't have an account?</p>
                                    <Link to='/register'
                                        type="button"
                                        className="btn btn-info btn-sm font-semibold rounded"

                                    >
                                        Sign Up
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

export default Login;