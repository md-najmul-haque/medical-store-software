import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { toast } from 'react-toastify';
import AddUser from './AddUser';
import UpdateUser from './UpdateUser';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserCard from './UserCard';

const User = () => {
    const [user, setUser] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)

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

            <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-5">
                {
                    users.map(user => <UserCard key={user._id} user={user} refetch={refetch} />)
                }

            </div>



            <div>
                {
                    user && <AddUser setUser={setUser} refetch={refetch} />
                }
            </div>

            <div>
                {
                    updateUser && <UpdateUser setUpdateUser={setUpdateUser} refetch={refetch} />
                }
            </div>

        </div>
    );
};

export default User;