import React, { useState } from 'react';
import { toast } from 'react-toastify';
import UpdateUser from './UpdateUser';
import ResetPassword from './ResetPassword';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlinePassword } from 'react-icons/md';


const UserDetails = ({ index, user, refetch }) => {

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



    return (<>
        <tr className="even:bg-gray-100">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
            <td className="text-sm text-gray-900 font-light w-28 px-6 py-4 whitespace-nowrap">
                <img src={image ? image : "https://i.ibb.co/RQV7pPN/avatar.png"} alt="" className="rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{name}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {email}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {role}
            </td>
            <td className="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                <label htmlFor='update-user' onClick={() => setUpdateUser(true)} className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></label>
                <label htmlFor='reset-password' onClick={() => setResetPassword(true)} className="btn btn-sm bg-orange-500 hover:bg-orange-600 border-none ml-2 font-semibold text-md text-white"> <MdOutlinePassword /></label>
                <button onClick={() => deleteUser(_id)} className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
            </td>
        </tr>
        {/* <div className='relative'>
                <div className='flex justify-between px-7 pt-7'>
                    <p className='bg-primary text-white px-3 py-1 rounded-lg'>{role}</p>
                    <p onClick={() => handleUserMenu(_id)}><BsThreeDotsVertical /></p>
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

            </div> */}

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
    </>
    );
};

export default UserDetails;