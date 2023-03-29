import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateMedicine = (updateMedicineId, setUpdateMedicine, refetch) => {
    const [data, setData] = useState({})
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/medicine/${updateMedicineId}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [updateMedicineId])


    console.log(data)

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
                if (result.success === true) {
                    const img = result.data.url

                    const medicine = {
                        medicineName: data.medicineName,
                        genericName: data.genericName,
                        medicineCategory: data.medicineCategory,
                        supplierName: data.supplierName,
                        brandName: data.brandName,
                        unit: data.unit,
                        origin: data.origin,
                        lotControl: data.lotControl,
                        quantity: data.quantity,
                        expData: data.expData,
                        batchNo: data.batchNo,
                        price: data.price,
                        imageURL: img,
                        remarks: data.remarks,
                    }

                    fetch(`http://localhost:5000/api/v1/medicine`, {
                        method: "POST",
                        body: JSON.stringify(medicine),
                        headers: {
                            'content-type': "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(medicine => {
                            if (medicine.status === "success") {
                                setUpdateMedicine(false)
                                reset()
                                toast.success("Medicine Data Saved Successfully")
                            } else {
                                toast.error('Fail to saved medicine data. Please try again later')
                            }
                        })
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="update-medicine" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box min-w-[50%] px-10 bg-white">
                    <div className='border-b-2'>
                        <label htmlFor="update-medicine" className="btn btn-sm btn-ghost font-bold text-lg btn-square absolute right-8 top-5">✕</label>
                        <h1 className='uppercase text-left text-primary text-xl font-bold'>Update Medicine</h1>
                    </div>

                    <div className="mx-auto mt-3">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <h2 className='font-semibold'>Medicine Basic info</h2>

                            <div className='grid grid-cols-3 gap-x-5'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="font-semibold">Medicine Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={data.medicineName}

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
                                        <span className="font-semibold">Generic Name</span>
                                    </label>
                                    <input
                                        type="text"
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
                                        <span className="font-semibold">Category Name</span>
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
                            </div>

                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Supplier Name</span>
                                    </label>
                                    <input
                                        type="text"
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
                                        <span className="font-semibold">Brand Name</span>
                                    </label>
                                    <input
                                        type="text"
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
                            </div>

                            <h2 className='font-semibold mt-5'>Medicine details info</h2>

                            <div className='grid grid-cols-3 gap-x-5'>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Price</span>
                                    </label>
                                    <input
                                        type="number"
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
                                        <span className="font-semibold">Quantity</span>
                                    </label>
                                    <input
                                        type="number"
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
                                        <span className="font-semibold">Expire Date</span>
                                    </label>
                                    <input
                                        type="date"
                                        className="input bg-gray-100 w-full "
                                        {...register("expData", {
                                            valueAsDate: true,
                                        })}
                                    />
                                </div>

                            </div>


                            <div className='grid grid-cols-4 gap-5'>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Batch No</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input bg-gray-100 w-full "
                                        {...register("batchNo", {
                                            required: {
                                                value: true,
                                                message: 'Batch no is required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.batchNo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.batchNo.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Lot Control</span>
                                    </label>
                                    <select className="select bg-gray-100 w-full " {...register("lotControl")}>
                                        <option disabled selected>Lot Control?</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Measurement Unit</span>
                                    </label>
                                    <input
                                        type="text"
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
                                        <span className="font-semibold">Country of Origin</span>
                                    </label>
                                    <input
                                        type="text"
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

                            </div>



                            <div className='grid grid-cols-2 gap-5'>
                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Medicine Image</span>
                                    </label>
                                    <input
                                        type="file"
                                        className="input bg-gray-100 w-full "
                                        {...register("image", {
                                            required: {
                                                value: true,
                                                message: 'Medicine image is required'
                                            }
                                        })} />
                                    <label className="label">
                                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                    </label>
                                </div>

                                <div className="form-control w-full ">
                                    <label className="label">
                                        <span className="font-semibold">Remarks</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="input bg-gray-100 w-full "
                                        {...register("remarks")} />
                                </div>
                            </div>

                            <div className="card-actions justify-center mt-5">
                                <button onClick={() => setUpdateMedicine(false)} className="btn btn-secondary px-10 text-white mr-5">Close</button>
                                <input type="submit" className="btn btn-primary px-10 text-white" value='Submit' />
                            </div>
                        </form >
                    </div>

                </div>

            </div>
        </div>
    );
};


export default UpdateMedicine;