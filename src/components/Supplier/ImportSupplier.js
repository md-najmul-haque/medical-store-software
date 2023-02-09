import React from 'react'
import { useForm } from 'react-hook-form';
import { BiDownload } from 'react-icons/bi';


const ImportSupplier = ({ setImportSupplier }) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        setImportSupplier(false)

    }

    return (
        <div className='bg-white'>
            <input type="checkbox" id="import-supplier" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[40%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="import-supplier" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Import customer CSV file</h1>
                    </div>

                    <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                        <p className='font-semibold text-xl'>Download Sample Customer CSV file <button className='btn btn-primary text-white'> <span className='font-bold mr-1'><BiDownload /></span> Download</button></p>

                        <div className='mb-12'>
                            <p className='font-semibold text-xl mb-2'>Select CSV file </p>
                            <input type="file" className="file-input file-input-warning  w-full max-w-xs" />
                        </div>

                        <hr />

                        <div className="flex justify-end items-center  mt-5">
                            <button onClick={() => setImportSupplier(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Upload' />
                        </div>

                    </form>

                </div>

            </div >

        </div >
    )
}

export default ImportSupplier