import React from 'react'
import { useForm } from 'react-hook-form';


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
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="import-supplier" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Import customer CSV file</h1>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <h2 className='font-semibold'>Supplier Basic info</h2> */}
                        <div className='grid grid-cols-2 gap-2'>
                            <div className="form-control w-full mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier ID</span>
                                </label>
                                <input
                                    type="text"
                                    className="input bg-gray-100 w-full"
                                    {...register("supplierId", {
                                        required: {
                                            value: true,
                                            message: 'Supplier id is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.supplierId?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierId.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full mx-auto">
                                <label className="label">
                                    <span className="font-semibold">Supplier Name</span>
                                </label>
                                <input
                                    type="text"
                                    className="input bg-gray-100 w-full "
                                    {...register("supplierName", {
                                        required: {
                                            value: true,
                                            message: 'Supplier Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.supplierName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierName.message}</span>}
                                </label>
                            </div>

                        </div>

                        <div className="flex justify-center items-center mt-5">
                            <button onClick={() => setImportSupplier(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                            <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                        </div>

                    </form>

                </div>

            </div >

        </div >
    )
}

export default ImportSupplier