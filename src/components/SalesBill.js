import React from 'react';
import { Link } from 'react-router-dom';

const SalesBill = () => {
    return (
        <div className='grid grid-cols-2 gap-5'>

            <div>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-60 bg-base-100 text-base-content">
                            <li><Link className='btn btn-success mb-2' to=''>All</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Ointment</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Cream</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Liquid</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Darman</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Tablet</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Device</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                            <li><Link className='btn btn-success mb-2' to=''>Syrup</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
            <div>
                <h1>this is section 2</h1>
            </div>
        </div>
    );
};

export default SalesBill;