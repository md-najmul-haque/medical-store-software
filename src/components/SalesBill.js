import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SalesBillBottomBar from './SalesBillBottomBar';
import SalesBillForm from './SalesBillForm';
import SalesBillNavbar from './SalesBillNavbar';
import SalesBillSidebar from './SalesBillSidebar';

const SalesBill = () => {
    const [medicine, setMedicine] = useState({})
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data)

    const handleMedicine = (medicine) => {
        setMedicine(medicine)

        let selectedMedicine = []
        if (medicine._id === selectedMedicine._id) {
            selectedMedicine.push(medicine)
        } else {
            selectedMedicine.push(medicine)
        }


        console.log(selectedMedicine)
    }

    return (
        <div className='h-screen'>
            <SalesBillNavbar />
            <div className='grid grid-cols-2 gap-5'>
                <SalesBillSidebar handleMedicine={handleMedicine} />
                <SalesBillForm medicine={medicine} />
            </div>
            <SalesBillBottomBar />
        </div>
    );
};

export default SalesBill;