import React, { useState } from 'react'
import { BiDownload } from 'react-icons/bi';
import Papa from 'papaparse';

const ImportSupplier = ({ setImportSupplier }) => {
    const [supplierData, setSupplierData] = useState([])
    console.log(supplierData)

    function handleSupplier() {
        // const file = event.target.files[0];
        Papa.parse(supplierData, {
            complete: function (results) {
                console.log(results.data);
                // do something with the parsed data
            }
        });
    }

    return (
        <div className='bg-white'>
            <input type="checkbox" id="import-supplier" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[40%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="import-supplier" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Import supplier CSV file</h1>
                    </div>


                    <p className='font-semibold text-xl'>Download Sample supplier CSV file <button className='btn btn-primary text-white'> <span className='font-bold mr-1'><BiDownload /></span> Download</button></p>

                    <div className='mb-12 mt-2'>
                        <p className='font-semibold text-xl mb-2'>Select CSV file </p>
                        <input type="file" onChange={e => setSupplierData(e.target.files[0])} className="file-input file-input-secondary  w-full max-w-xs" />
                    </div>

                    <hr />

                    <div className="flex justify-end items-center  mt-5">
                        <button onClick={() => setImportSupplier(false)} className="btn btn-ghost bg-base-100 text-primary px-10 mr-5">Close</button>
                        <input onClick={handleSupplier} type="submit" className="btn btn-primary px-10 text-white" value='Upload' />
                    </div>



                </div>

            </div >

        </div >
    )
}

export default ImportSupplier