import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import AddCategory from './AddCategory';
import UpdateCategory from './UpdateCategory';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';

const CategoryList = () => {
    const [isLoading, categories, refetch] = useCategory()
    const [categoryModal, setCategoryModal] = useState(false)
    const [editCategoryModal, setEditCategoryModal] = useState(false)
    const [query, setQuery] = useState('')
    const [categoryQuantity, setCategoryQuantity] = useState(10)

    if (isLoading) {
        return <Loading />
    }

    const keys = ['_id', 'categoryName', 'status']

    const search = (data) => {
        return data.filter(category => keys.some(key => category[key]?.toLowerCase().includes(query)))
    }

    // delete category
    const deleteCategory = (id) => {

        fetch(`http://localhost:5000/api/v1/category/${id}`,
            {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast(data.message)
                    refetch()
                } else {
                    toast(data.message)
                }
            })


    }

    return (
        <div className='h-screen'>
            <div className='bg-base-100 py-3 px-5 flex items-center justify-between'>
                <div>
                    <h1 className='uppercase text-xl font-bold text-left'>Category List</h1>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/dashboard/categoryList'>Category List</Link></li>
                        </ul>
                    </div>
                </div>
                <label htmlFor="add-category" onClick={() => { setCategoryModal(true) }} className="btn btn-primary text-white normal-case ml-5" ><span className="mr-1"><GoPlus /></span> Create Category</label>
            </div>

            <div className='mx-5 shadow-lg rounded-lg bg-white'>
                <div className='py-5 px-5 mt-10 flex justify-between items-center'>
                    <div className='flex'>
                        <p>Show</p>
                        <select onChange={e => setCategoryQuantity(e.target.value)} className="input-bordered bg-base-200 mx-1" >
                            <option>5</option>
                            <option selected>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                        <p>entries</p>
                    </div>
                    <div className="form-control w-full flex justify-end items-end">
                        <div className="flex">
                            <label className="label">
                                <span className="label-text font-semibold">Search:</span>
                            </label>
                            <input
                                type="text"
                                onChange={event => setQuery(event.target.value)}
                                className="max-w-xs border-2 bg-white focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-center">
                                    <thead className="bg-accent border-b">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">
                                                Sl
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                CAT ID
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Image
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Category Name
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Total Product
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Status
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            search(categories)?.slice(0, categoryQuantity).map((category, index) => {
                                                return (
                                                    <tr className="even:bg-gray-100">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category._id}</td>
                                                        <td className="text-sm text-gray-900 font-light w-28 px-6 py-4 whitespace-nowrap">
                                                            <img src={category.image} alt="" />
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {category.categoryName}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {category.quantity}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {category.status}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                                                            <label htmlFor='edit-category' onClick={() => setEditCategoryModal(true)} className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></label>
                                                            <button onClick={() => deleteCategory(category._id)} className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
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

            <div>
                {
                    categoryModal && <AddCategory setCategoryModal={setCategoryModal} refetch={refetch} />
                }
            </div>

            <div>
                {
                    editCategoryModal && <UpdateCategory setEditCategoryModal={setEditCategoryModal} />
                }
            </div>

        </div>
    );
};

export default CategoryList;