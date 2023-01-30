import React, { useState } from 'react';

const SalesBillBottomBar = ({ total, totalDiscount, vatPercentage }) => {
    const [dueAmount, setDueAmount] = useState(null)

    const handlePaidAmount = (e) => {
        const paidAmount = e.target.value
        setDueAmount(((total - totalDiscount) + (total - totalDiscount) * vatPercentage) - paidAmount)
    }

    return (
        <div className='absolute inset-x-0 bottom-2 '>
            <div className='flex justify-between items-center pl-5 pr-10'>
                <div className='grid grid-cols-3'>
                    <div class="flex items-center">
                        <h2 className='p-3 font-semibold'>Total:</h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full bg-white max-w-xs input-bordered focus:outline-none rounded text-right"
                            value={((total - totalDiscount) + (total - totalDiscount) * vatPercentage).toFixed(2)}
                        />
                    </div>
                    <div class="flex items-center">
                        <h2 className='p-3 font-semibold flex-none'>Paid Amount: </h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full max-w-xs bg-white input-bordered focus:outline-none rounded text-right"
                            onChange={e => handlePaidAmount(e)}
                        />
                    </div>
                    <div class="flex flex-nowrap shrink-0 items-center">
                        <span className='p-3 font-semibold flex-none'>Deu Amount: </span>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full bg-white max-w-xs input-bordered focus:outline-none rounded text-right"
                            value={dueAmount}
                        />
                    </div>
                </div>
                <div>
                    <button className='btn btn-secondary text-white'>Cash Payment</button>
                    <button className='btn btn-primary text-white ml-2'>Bank Payment</button>
                </div>
            </div>
        </div>
    );
};

export default SalesBillBottomBar;