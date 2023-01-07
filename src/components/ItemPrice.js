import React from 'react'
import { useForm } from 'react-hook-form';

const ItemPrice = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div className="container mx-auto mt-3">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">TP</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter TP"
                            className="input bg-gray-100 w-full "
                            {...register("tp", {
                                required: {
                                    value: true,
                                    message: 'TP is required'
                                }
                            })} />
                        <label className="label">
                            {errors.tp?.type === 'required' && <span className="label-text-alt text-red-500">{errors.tp.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">DP</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter DP"
                            className="input bg-gray-100 w-full "
                            {...register("dp", {
                                required: {
                                    value: true,
                                    message: 'DP is required'
                                }
                            })} />
                        <label className="label">
                            {errors.dp?.type === 'required' && <span className="label-text-alt text-red-500">{errors.dp.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">MRP</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter MRP"
                            className="input bg-gray-100 w-full "
                            {...register("mrp", {
                                required: {
                                    value: true,
                                    message: 'MRP is required'
                                }
                            })} />
                        <label className="label">
                            {errors.mrp?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mrp.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Discount</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Discount"
                            className="input bg-gray-100 w-full "
                            {...register("discount")} />
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Start Data</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Start Date"
                            className="input bg-gray-100 w-full "
                            {...register("startData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">End Data</span>
                        </label>
                        <input
                            type="date"
                            placeholder="End Date"
                            className="input bg-gray-100 w-full "
                            {...register("endData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Status</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Status"
                            className="input bg-gray-100 w-full "
                            {...register("status", {
                                required: {
                                    value: true,
                                    message: 'Status is required'
                                }
                            })} />
                        <label className="label">
                            {errors.status?.type === 'required' && <span className="label-text-alt text-red-500">{errors.status.message}</span>}
                        </label>
                    </div>

                    <input type="submit" className="btn w-full btn-accent text-white mt-7" value='Submit' />
                </div>
            </form>

        </div>
    )
}

export default ItemPrice