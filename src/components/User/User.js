import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import AddUser from './AddUser';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserDetails from './UserDetails';

const User = () => {
    const [user, setUser] = useState(false)


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
                                            User Name
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Photo
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
                                        users.map((user, index) => <UserDetails key={user._id} user={user} refetch={refetch} />)
                                    }

                                </tbody>
                            </table>
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