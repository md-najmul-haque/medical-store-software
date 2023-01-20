import React from 'react';
import { useForm } from 'react-hook-form';

const MedicineInfo = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();



    const onSubmit = data => {

        const image = data.image[0];
        const imageStorageKey = '659c9f3714e59a5aab97b06d91ac3782';
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        const formData = new FormData();
        formData.append('image', image);

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


        // fetch(`http://localhost:5000/`, {
        //     method: "POST",
        //     body: JSON.stringify(data),
        //     headers: {
        //         'content-type': "application/json"
        //     }
        // })
        //     .then(res => res.json())
        //     .then(medicine => console.log('inside medicine', medicine))



        // console.log(data.image[0].name)

    }

    return (
        <div className="container mx-auto mt-3">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid grid-cols-2 gap-x-5'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Medicine Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Medicine Name"
                            className="input bg-gray-100 w-full "
                            {...register("medicineName", {
                                required: {
                                    value: true,
                                    message: 'Medicine name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.medicineName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.medicineName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Generic Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Generic Name"
                            className="input bg-gray-100 w-full "
                            {...register("genericName", {
                                required: {
                                    value: true,
                                    message: 'Generic name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.genericName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.genericName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <select className="select bg-gray-100 w-full " {...register("medicineCategory")}>
                            <option disabled selected>Medicine Category</option>
                            <option>Tablet</option>
                            <option>Capsule</option>
                            <option>Drop</option>
                            <option>Syrup</option>
                            <option>Ointment</option>
                            <option>Injection</option>
                        </select>
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
                            <span className="label-text">Brand Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Brand Name"
                            className="input bg-gray-100 w-full "
                            {...register("brandName", {
                                required: {
                                    value: true,
                                    message: 'Brand name is required'
                                }
                            })} />
                        <label className="label">
                            {errors.brandName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.brandName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Measurement Unit</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Measurement Unit"
                            className="input bg-gray-100 w-full "
                            {...register("unit", {
                                required: {
                                    value: true,
                                    message: 'Measurement unit is required'
                                }
                            })} />
                        <label className="label">
                            {errors.unit?.type === 'required' && <span className="label-text-alt text-red-500">{errors.unit.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Country of Origin</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Country of Origin"
                            className="input bg-gray-100 w-full "
                            {...register("origin", {
                                required: {
                                    value: true,
                                    message: 'Country of origin is required'
                                }
                            })} />
                        <label className="label">
                            {errors.origin?.type === 'required' && <span className="label-text-alt text-red-500">{errors.origin.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Lot Control</span>
                        </label>
                        <select className="select bg-gray-100 w-full " {...register("lotControl")}>
                            <option disabled selected>Lot Control?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
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
                            <span className="label-text">Expire Date</span>
                        </label>
                        <input
                            type="date"
                            className="input bg-gray-100 w-full "
                            {...register("expData", {
                                valueAsDate: true,
                            })}
                        />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="input bg-gray-100 w-full "
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })} />
                        <label className="label">
                            {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Medicine Image</span>
                        </label>
                        <input
                            type="file"
                            className="input bg-gray-100 w-full "
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
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

                    <input type="submit" className="btn w-full btn-accent text-white mt-5" value='Submit' />
                </div>
            </form >

        </div >
    );
};

export default MedicineInfo;