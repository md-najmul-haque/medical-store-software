import React from 'react';

const MedicineCard = ({ medicine }) => {

    const { name, photoURL } = medicine
    return (
        <div className="card w-40 gap-3 mb-2 bg-base-100 shadow-xl">
            <figure><img src={photoURL} alt="medicine" /></figure>
            <h2 className="text-center pb-1">{name}</h2>
        </div>
    );
};

export default MedicineCard;