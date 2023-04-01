import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCategory from '../../hooks/useCategory';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';

const User = () => {
    const [isLoading, categories, refetch] = useCategory()
    const [user, setUser] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)
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
                    <h1 className='uppercase text-xl font-bold text-left'>User Management</h1>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/dashboard/user'>User</Link></li>
                        </ul>
                    </div>
                </div>
                <label htmlFor="add-user" onClick={() => { setUser(true) }} className="btn btn-primary text-white normal-case ml-5" ><span className="mr-1"><GoPlus /></span> Create User</label>
            </div>



            <div>
                {
                    user && <AddUser setUser={setUser} />
                }
            </div>

            <div>
                {
                    updateUser && <UpdateUser setUpdateUser={setUpdateUser} />
                }
            </div>

        </div>
    );
};

export default User;