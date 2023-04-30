import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import AddUser from './AddUser';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserDetails from './UserDetails';

const User = () => {
    const [user, setUser] = useState(false)
    const [query, setQuery] = useState('')
    const [selectedUserNumber, setSelectedUserNumber] = useState(10)

    const keys = ['name', 'email', 'role']

    const search = (data) => {
        return data.filter(category => keys.some(key => category[key]?.toLowerCase().includes(query)))
    }



    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/api/v1/user')
            .then(res => res.json()),
        {
            select: (data) => data && data.user,
        }
    )


    if (isLoading) {
        return <Loading />
    }

    console.log(users)


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

            <div className='mx-5 shadow-lg rounded-lg bg-white'>
                <div className='py-5 px-5 mt-10 flex justify-between items-center'>
                    <div className='flex'>
                        <p>Show</p>
                        <select onChange={e => setSelectedUserNumber(e.target.value)} className="input-bordered bg-base-200 mx-1" >
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
                                                Photo
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                User Name
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                User Email
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Role
                                            </th>
                                            <th scope="col" className="px-6 py-4">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            search(users)?.slice(0, selectedUserNumber).map((user, index) => <UserDetails key={user._id} index={index} user={user} refetch={refetch} />)
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
                    user && <AddUser setUser={setUser} refetch={refetch} />
                }
            </div>

        </div>
    );
};

export default User;