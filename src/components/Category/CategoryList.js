import React from 'react';
import { IoIosCreate } from 'react-icons/io';
import { Link } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

const CategoryList = () => {

    const [categories] = useCategory()

    return (
        <div className='bg-white h-screen'>
            <div className='bg-base-100 py-3 px-5 border-b-2 flex items-center'>
                <h1 className='uppercase text-xl font-bold text-left'>Category List</h1>
                <Link to='addCategory' className="btn btn-primary text-white normal-case btn-sm ml-5" ><span className="mr-1"><IoIosCreate /></span> Create Category</Link>
            </div>

            <div className='py-3 px-5 mt-10 border-b-2 flex justify-between items-center'>
                <div className='flex'>
                    <p>Show</p>
                    <select className="input-bordered bg-base-200 mx-1" >
                        <option selected>100</option>
                    </select>
                    <p>entries</p>
                </div>
                <div className="form-control w-full flex justify-end items-end">
                    <div className="flex">
                        <label className="label">
                            <span className="label-text font-semibold">Search:</span>
                        </label>
                        <input
                            type="number"
                            className="max-w-xs border-2 bg-white focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">
                                            Sl
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            CAT ID
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Image
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Category Name
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Total Product
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categories?.map((category, index) => {
                                            return (
                                                <tr class="even:bg-gray-100 border-b">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category._id}</td>
                                                    <td class="text-sm text-gray-900 font-light w-28 px-6 py-4 whitespace-nowrap">
                                                        <img src={category.image} alt="" />
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {category.categoryName}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {category.quantity}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {category.status}
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                                                        <button className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></button>
                                                        <button className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CategoryList;