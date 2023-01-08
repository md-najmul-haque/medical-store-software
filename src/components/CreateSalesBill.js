import React from 'react';
import { useForm } from 'react-hook-form';

const CreateSalesBill = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    return (
        <div>
            <div className='flex justify-between items-center bg-gray-100 py-3 px-10 border-b-2'>
                <h1 className='uppercase text-xl font-bold'>Create sales bill</h1>
                <button className='btn btn-info px-28'>Back</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mx-5'>




                    <div className='flex justify-between items-center ml-5 mt-5'>
                        <button className='btn btn-info'>Back</button>
                        <input type="submit" className="btn btn-success text-white ml-10" value='Save' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateSalesBill;