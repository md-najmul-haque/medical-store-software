import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { toast } from 'react-toastify';
import UpdateUser from './UpdateUser';
import ResetPassword from './ResetPassword';

const UserCard = ({ user, refetch }) => {

    const [open, setOpen] = useState(false)
    const [updateUser, setUpdateUser] = useState(false)
    const [resetPassword, setResetPassword] = useState(false)

    const { _id, name, email, role, image } = user

    // delete user
    const deleteUser = (id) => {

        fetch(`http://localhost:5000/api/v1/user/${id}`,
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

    const handleUpdateUser = (id) => {
        setUpdateUser(true)
        setOpen(false)
        console.log(resetPassword)
    }

    const handlePassword = () => {
        setResetPassword(true)
        setOpen(false)
        console.log(resetPassword)
    }

    return (
        <div className="card w-96 h-80 bg-white shadow-xl">

            <div className='relative'>
                <div className='flex justify-between px-7 pt-7'>
                    <p className='bg-primary text-white px-3 py-1 rounded-lg'>{role}</p>
                    <p className={``} onClick={() => { setOpen(!open) }}><BsThreeDotsVertical /></p>
                </div>

                <div className='absolute right-10' >
                    {
                        open &&

                        <ul className='bg-white shadow-lg py-2 rounded-lg '>
                            <li onClick={() => setUpdateUser(true)} className='hover:bg-base-200 py-1.5'><label htmlFor="update-user" className='px-5 cursor-pointer'>Edit</label></li>
                            <li onClick={() => deleteUser(_id)} className='hover:bg-base-200 px-5 py-1.5 cursor-pointer'> Delete</li>
                            <li onClick={() => setResetPassword(true)} className='hover:bg-base-200  py-1.5'>  <label htmlFor="reset-password" className='px-5 cursor-pointer'>Reset Password</label></li>
                        </ul>

                    }
                </div>
            </div>

            <div className='flex justify-center item-center mt-10'>
                <figure className="w-24">
                    <img src={image ? image : "https://i.ibb.co/RQV7pPN/avatar.png"} alt="" className="rounded-full" />
                </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>

            </div>

            <div>
                {
                    updateUser && <UpdateUser setUpdateUser={setUpdateUser} refetch={refetch} user={user} />
                }
            </div>

            <div>
                {
                    resetPassword && <ResetPassword setResetPassword={setResetPassword} refetch={refetch} user={user} />
                }
            </div>
        </div>
    );
};

export default UserCard;