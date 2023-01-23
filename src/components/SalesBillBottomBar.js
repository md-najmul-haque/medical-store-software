import React from 'react';

const SalesBillBottomBar = () => {
    return (
        <div className='absolute inset-x-0 bottom-2 '>
            <div className='flex justify-between items-center pl-5 pr-10'>
                <div className='grid grid-cols-3'>
                    <div class="flex items-center">
                        <h2 className='p-3 font-semibold'>Total: </h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>
                    <div class="flex items-center">
                        <h2 className='p-3 font-semibold flex-none'>Paid Amount: </h2>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>
                    <div class="flex flex-nowrap shrink-0 items-center">
                        <span className='p-3 font-semibold flex-none'>Deu Amount: </span>
                        <input
                            type="number"
                            placeholder='00.0'
                            className="input w-full max-w-xs input-bordered focus:outline-none rounded text-right"
                        />
                    </div>
                </div>
                <div>
                    <button className='btn btn-success'>Cash Payment</button>
                    <button className='btn btn-info ml-2'>Bank Payment</button>
                </div>
            </div>
        </div>
    );
};

export default SalesBillBottomBar;