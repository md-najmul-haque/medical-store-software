import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SalesBill = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className='grid grid-cols-2 gap-5'>

            <div>
                <div className="drawer drawer-mobile">

                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                        <div className='grid grid-cols-2 gap-x-10'>
                            <div class="flex justify-center">
                                <div class="mb-3 xl:w-96">
                                    <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                                        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-success focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                        <button class="btn inline-block px-6 py-2.5 bg-success text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-success hover:shadow-lg focus:bg-success  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-success active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="form-control w-full">
                                <select className="select w-full input-bordered">
                                    <option disabled selected>Select Medicine</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                            <li><Link className='btn btn-success mb-2' to=''>All</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Ointment</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Cream</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Liquid</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Darman</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Tablet</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Device</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Stock</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Antibiotics</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Injection</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Boroline</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <h1>this is section 2</h1>
            </div>
        </div>
    );
};

export default SalesBill;