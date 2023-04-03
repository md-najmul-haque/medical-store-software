import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const UserCard = (user) => {

    const [open, setOpen] = useState(false)

    const { name, email, role, image } = user.user

    console.log(user)

    return (
        <div className="card w-96 bg-white shadow-xl">

            <div className='relative'>
                <div className='flex justify-between px-7 pt-7'>
                    <p>{role ? role : 'Stuff'}</p>
                    <p onClick={() => setOpen(!open)}><BsThreeDotsVertical /></p>
                </div>

                <div className='absolute right-10' >
                    {
                        open &&

                        <ul className='bg-white shadow-lg py-5 rounded-lg '>
                            <li className='hover:bg-base-200 px-5 py-1.5'><Link to="">Edit</Link></li>
                            <li className='hover:bg-base-200 px-5 py-1.5'> <Link to="">Delete</Link></li>
                            <li className='hover:bg-base-200 px-5 py-1.5'>  <Link to="">Reset Password</Link></li>
                        </ul>


                    }
                </div>
            </div>

            <div className='flex justify-center item-center mt-10'>
                <figure className="w-24">
                    <img src={image ? image : "https://i.ibb.co/RQV7pPN/avatar.png"} alt="Shoes" className="rounded-full" />
                </figure>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>

            </div>
        </div>
    );
};

export default UserCard;