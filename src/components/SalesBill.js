import React, { useEffect, useState } from 'react';
import SalesBillBottomBar from './SalesBillBottomBar';
import SalesBillForm from './SalesBillForm';
import SalesBillNavbar from './SalesBillNavbar';
import SalesBillSidebar from './SalesBillSidebar';

const SalesBill = () => {
    const [total, setTotal] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    const [vat, setVat] = useState(0)
    const [medicines, setMedicines] = useState([])
    let [medicine, setMedicine] = useState([])


    useEffect(() => {
        fetch('medicines.json')
            .then(res => res.json()
                .then(data => setMedicines(data)))
    }, [])


    const handleMedicine = (id) => {
        let incrementedMedicine = medicine.find(med => med._id === id)
        const formateData = medicine.filter(med => med._id !== id)

        if (incrementedMedicine) {
            incrementedMedicine = { ...incrementedMedicine, defaultQuantity: incrementedMedicine.defaultQuantity + 1 }

            let incrementedMedicineIndex = medicine.findIndex(med => med._id === id);
            medicine.splice(incrementedMedicineIndex, 1)
            medicine = Array.from(medicine);
            medicine?.splice(incrementedMedicineIndex, 0, incrementedMedicine);
            setMedicine(medicine)

            setTotal(total + incrementedMedicine?.price)

        } else {
            const data = medicines.find(medicine => medicine._id === id)
            setTotal(total + data?.price)
            const dataInfo = { ...data, defaultQuantity: 1 }
            if (dataInfo) {
                setMedicine([...medicine, dataInfo])
            }
        }
        // console.log(incrementQuantity)

    }

    const removeMedicine = (id) => {
        const removeMedicine = medicine.find(med => med._id === id)

        //set total value
        if (removeMedicine.discountedValue) {
            setTotalDiscount(totalDiscount - removeMedicine.discountedValue)
            setTotal(total - removeMedicine.price)

        } else {
            setTotal(total - removeMedicine.price)

        }

        // setTotal(total - removeMedicine.price)
        const restMedicine = medicine.filter(med => med._id !== id)

        return setMedicine(restMedicine)

    }

    // console.log(medicine)


    return (
        <div className='h-screen'>
            <SalesBillNavbar />
            <div className='grid grid-cols-2 gap-5'>
                <SalesBillSidebar medicines={medicines} setMedicines={setMedicines} handleMedicine={handleMedicine} />
                <SalesBillForm total={total} setTotal={setTotal} medicine={medicine} setMedicine={setMedicine} removeMedicine={removeMedicine} totalDiscount={totalDiscount} setTotalDiscount={setTotalDiscount} vat={vat} setVat={setVat} />
            </div>
            <SalesBillBottomBar total={total} totalDiscount={totalDiscount} vat={vat} />
        </div>
    );
};

export default SalesBill;