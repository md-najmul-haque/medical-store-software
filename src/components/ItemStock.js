import React from 'react'
import { useForm } from 'react-hook-form';

const ItemStock = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className="container mx-auto">
            <h2 className="text-center text-2xl uppercase font-bold text-primary mb-2">Item Stock</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Lot No</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Lot No"
                            className="input bg-gray-100 w-full "
                            {...register("lotNo", {
                                required: {
                                    value: true,
                                    message: 'Lot no is required'
                                }
                            })} />
                        <label className="label">
                            {errors.lotNo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lotNo.message}</span>}
                        </label>
                    </div>



                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Manufacturing Data</span>
                        </label>
                        <input
                            type="date"
                            className="input bg-gray-100 w-full "
                            {...register("mfgData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Expire Data</span>
                        </label>
                        <input
                            type="date"
                            className="input bg-gray-100 w-full "
                            {...register("expireData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Quantity"
                            className="input bg-gray-100 w-full "
                            {...register("quantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is required'
                                }
                            })} />
                        <label className="label">
                            {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.quantity.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Purchase Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Purchase Price"
                            className="input bg-gray-100 w-full "
                            {...register("purchasePrice", {
                                required: {
                                    value: true,
                                    message: 'Purchase price is required'
                                }
                            })} />
                        <label className="label">
                            {errors.purchasePrice?.type === 'required' && <span className="label-text-alt text-red-500">{errors.purchasePrice.message}</span>}
                        </label>
                    </div>

                    <input type="submit" className="btn w-full btn-primary text-white mt-7" value='Submit' />
                </div>
            </form>

        </div>
    )
}

export default ItemStock