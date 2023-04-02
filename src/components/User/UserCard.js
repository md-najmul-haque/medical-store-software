import React from 'react';

const UserCard = (user) => {

    const { name, email, role } = user.user

    console.log(user)

    return (
        <div className="card w-96 bg-white shadow-xl">
            <figure className="px-10 pt-10">
                <img src="" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{role ? role : ''}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;