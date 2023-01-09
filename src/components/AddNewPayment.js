import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewPayment = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)
    return (
        <div>
            <h1 className='uppercase text-left text-xl font-bold bg-gray-100 py-5 pl-5 border-b-2'>Add New Payment</h1>
            <form className='mx-10' onSubmit={handleSubmit(onSubmit)}>
                <div className=''>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input
                            type="date"
                            className="input bg-gray-100 w-full "
                            {...register("date", {
                                valueAsDate: true,
                                required: {
                                    value: true,
                                    message: 'Date is required'
                                }
                            },


                            )}
                        />
                        <label className="label">
                            {errors.date?.type === 'required' && <span className="label-text-alt text-red-500">{errors.date.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Supplier Name"
                            className="input bg-gray-100 w-full "
                            {...register("supplierName", {
                                required: {
                                    value: true,
                                    message: 'Supplier name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.supplierName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.supplierName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Amount</span>
                        </label>
                        <input
                            type="number"
                            className="input bg-gray-100 w-full "
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: 'Amount is required'
                                }
                            })} />
                        <label className="label">
                            {errors.amount?.type === 'required' && <span className="label-text-alt text-red-500">{errors.amount.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Payment Method</span>
                        </label>
                        <select className="select bg-gray-100 w-full " {...register("lotControl")}>
                            <option selected>Bkash</option>
                            <option>Nagad</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Transaction Ref</span>
                        </label>
                        <input
                            type="text"
                            className="input bg-gray-100 w-full "
                            {...register("transactionRef", {
                                required: {
                                    value: true,
                                    message: 'Transaction Ref is required'
                                }
                            })} />
                        <label className="label">
                            {errors.transactionRef?.type === 'required' && <span className="label-text-alt text-red-500">{errors.transactionRef.message}</span>}
                        </label>
                    </div>


                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Remarks</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Remarks"
                            className="input bg-gray-100 w-full "
                            {...register("remarks")} />
                    </div>

                    <button className='btn btn-info px-16'>Back</button>
                    <input type="submit" className="btn btn-success px-14 ml-5 text-white mt-5" value='Submit' />

                </div>
            </form>
        </div>
    );
};

export default AddNewPayment;