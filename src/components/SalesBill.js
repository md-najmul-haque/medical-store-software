import React, { useEffect, useState } from 'react';
import SalesBillBottomBar from './SalesBillBottomBar';
import SalesBillForm from './SalesBillForm';
import SalesBillNavbar from './SalesBillNavbar';
import SalesBillSidebar from './SalesBillSidebar';

const SalesBill = () => {

    const [medicines, setMedicines] = useState([])
    const [medicine, setMedicine] = useState([])
    const [grandTotal, setGrandTotal] = useState(null)

    useEffect(() => {
        fetch('medicines.json')
            .then(res => res.json()
                .then(data => setMedicines(data)))
    }, [])


    const handleMedicine = (id) => {
        var incrementQuantity = medicine.find(med => med._id === id)
        const formateData = medicine.filter(med => med._id !== id)

        if (incrementQuantity) {
            incrementQuantity = { ...incrementQuantity, defaultQuantity: incrementQuantity.defaultQuantity + 1 }
            setMedicine([...formateData, incrementQuantity])

        } else {
            const data = medicines.find(medicine => medicine._id === id)
            const dataInfo = { ...data, defaultQuantity: 1 }
            if (dataInfo) {
                setMedicine([...medicine, dataInfo])
            }
        }
        // console.log(incrementQuantity)

    }

    const removeMedicine = (id) => {
        const restMedicine = medicine.filter(med => med._id !== id)
        setMedicine(restMedicine)
        // console.log(restMedicine)


    }


    console.log(medicine)

    return (
        <div className='h-screen'>
            <SalesBillNavbar />
            <div className='grid grid-cols-2 gap-5'>
                <SalesBillSidebar medicines={medicines} setMedicines={setMedicines} handleMedicine={handleMedicine} />
                <SalesBillForm medicine={medicine} removeMedicine={removeMedicine} grandTotal={grandTotal} setGrandTotal={setGrandTotal} />
            </div>
            <SalesBillBottomBar />
        </div>
    );
};

export default SalesBill;