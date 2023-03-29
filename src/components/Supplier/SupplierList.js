import React, { useState } from "react";
import { TbFileImport, TbFileExport } from 'react-icons/tb';
import useSupplier from "../../hooks/useSupplier";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import AddSupplier from "./AddSupplier";
import ImportSupplier from "./ImportSupplier";
import { Link } from "react-router-dom";
import UpdateSupplier from "./UpdateSupplier";
import { CSVLink } from "react-csv";
import { toast } from "react-toastify";


const SupplierList = () => {
    const [suppliers] = useSupplier()
    const [supplierModal, setSupplierModal] = useState(false)
    const [importSupplier, setImportSupplier] = useState(false)
    const [query, setQuery] = useState('')
    const [numberOfSupplier, setNumberOfSupplier] = useState(10)
    const [updateSupplier, setUpdateSupplier] = useState(false)

    const keys = ['_id', 'supplierName', 'phone', 'contactPerson', 'address', 'status']
    // console.log(suppliers[0]?.["supplierName"])

    const search = (data) => {
        return data.filter(supplier => keys.some(key => supplier[key]?.toLowerCase().includes(query)))
    }

    const deleteSupplier = (id) => {

        fetch(`http://localhost:5000/api/v1/medicine/${id}`,
            {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    toast(data.message)
                    // refetch()
                } else {
                    toast(data.message)
                }
            })


    }

    return (
        <div className='h-screen'>
            <div className='bg-base-100 py-3 px-5 flex justify-between items-center'>
                <div>
                    <h1 className='uppercase text-xl text-primary font-bold text-left'>Supplier List</h1>
                    <div className="text-sm breadcrumbs">
                        <ul>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/dashboard/supplierList'>Supplier List</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='flex justify-end gap-1'>
                    <label htmlFor="import-supplier" onClick={() => { setImportSupplier(true) }} className="btn btn-primary btn-sm text-white normal-case" ><span className="mr-1"><TbFileImport /></span>Import</label>
                    <CSVLink data={suppliers} filename={"Suppliers.csv"} target="_blank" className="btn btn-primary  text-white normal-case btn-sm" ><span className="mr-1"><TbFileExport /></span> Export</CSVLink>
                    <label htmlFor="add-supplier" onClick={() => { setSupplierModal(true) }} className="btn btn-primary btn-sm text-white normal-case" > <span className="mr-1"><GoPlus /></span> Add New</label>
                </div>
            </div>

            <div className="mx-5 bg-white shadow-lg rounded-lg">
                <div className="flex gap-16 justify-end pt-10 mr-5">
                    <div className="card w-96 pb-10 bg-white shadow-xl">
                        <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                            <h2 className="p-3 font-2xl text-primary font-bold">Total Payable (BDT)</h2>
                            <p className="p-3 rounded-md bg-primary text-white">100000</p>
                        </div>
                    </div>

                    <div className="card w-96 pb-10 bg-white shadow-xl">
                        <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                            <h2 className="p-3 font-2xl text-primary font-bold">Total Paid (BDT)</h2>
                            <p className="p-3 rounded-md bg-primary text-white">50000</p>
                        </div>
                    </div>

                    <div className="card w-96 pb-10 bg-white shadow-xl">
                        <div className="flex justify-between border-b-2 items-center px-5 pt-2 pb-2">
                            <h2 className="p-3 font-2xl text-primary font-bold">Total Due (BDT)</h2>
                            <p className="p-3 rounded-md bg-primary text-white">50000</p>
                        </div>
                    </div>

                </div>

                <div className='py-3 px-5 mt-10 flex justify-between items-center'>
                    <div className='flex'>
                        <p>Show</p>
                        <select onChange={e => setNumberOfSupplier(e.target.value)} className="input-bordered bg-base-200 mx-1" >
                            <option>5</option>
                            <option selected>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>40</option>
                            <option>50</option>
                        </select>
                        <p>entries</p>
                    </div>
                    <div className="form-control w-full flex justify-end items-end">
                        <div className="flex">
                            <label className="label">
                                <span className="label-text font-semibold">Search:</span>
                            </label>
                            <input
                                type="text"
                                onChange={event => setQuery(event.target.value)}
                                className="max-w-xs border-2 bg-white focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="pt-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-center">
                                    <thead class="bg-accent text-primary border-b">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">
                                                Sl
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Supplier Id
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Supplier Name
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Address
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Phone
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Contact Person
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Payable
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Paid
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Due
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Status
                                            </th>
                                            <th scope="col" class="px-6 py-4">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            search(suppliers)?.slice(0, numberOfSupplier).map((supplier, index) => {
                                                return (
                                                    <tr class="even:bg-gray-100 border-b" key={supplier._id}>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplier._id}</td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.supplierName}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.address}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.phone}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.contactPerson}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.payable}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.paid}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.payable - supplier.paid}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {supplier.status}
                                                        </td>
                                                        <td class="text-sm text-gray-900 font-light mt-2 px-5 py-4 whitespace-nowrap flex items-center justify-center">
                                                            <label htmlFor="update-supplier" onClick={() => setUpdateSupplier(true)} className="btn btn-sm bg-sky-500 hover:bg-sky-600 border-none font-semibold text-md text-white"> <AiOutlineEdit /></label>
                                                            <button onClick={() => deleteSupplier(supplier._id)} className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-md text-white ml-2"><RiDeleteBin6Line /></button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {
                    supplierModal && <AddSupplier setSupplierModal={setSupplierModal} />
                }
            </div>

            <div>
                {
                    importSupplier && <ImportSupplier setImportSupplier={setImportSupplier} />
                }
            </div>

            <div>
                {
                    updateSupplier && <UpdateSupplier setUpdateSupplier={setUpdateSupplier} />
                }
            </div>

        </div>
    )
}

export default SupplierList