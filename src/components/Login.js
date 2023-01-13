import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Login = () => {
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
                                <form>
                                    <p class="mb-4 mt-5 text-xl">Please login to your account</p>
                                    <div class="mb-4">
                                        <input
                                            type="text"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput1"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div class="mb-4">
                                        <input
                                            type="password"
                                            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                            id="exampleFormControlInput1"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div class="text-center pt-1 mb-12 pb-1">
                                        <button type="button" className='btn btn-success btn-sm px-6 rounded w-full mb-3 font-semibold'>Login</button>
                                        <a class="text-red-600" href="#!">Forgot password?</a>
                                    </div>
                                    <div class="flex items-center justify-between pb-6">
                                        <p class="mb-0 mr-2">Don't have an account?</p>
                                        <Link to='/register'
                                            type="button"
                                            class="btn btn-info btn-sm font-semibold rounded"

                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </section >

    );
};

export default Login;