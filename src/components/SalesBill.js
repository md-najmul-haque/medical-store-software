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
    const [vatPercentage, setVatPercentage] = useState(0)
    const [givenAmount, setGivenAmount] = useState(0)
    const [changeAmount, setChangeAmount] = useState(0)

    useEffect(() => {
        fetch('medicines.json')
            .then(res => res.json()
                .then(data => setMedicines(data)))
    }, [])


    const handleMedicine = (id) => {
        let incrementedMedicine = medicine.find(med => med._id === id)
        const selectedMedicine = medicines.find(medicine => medicine._id === id)

        if (incrementedMedicine) {
            incrementedMedicine = { ...incrementedMedicine, defaultQuantity: incrementedMedicine.defaultQuantity + 1 }

            //set incremented quantity. row up-down problem solved by using this way
            let incrementedMedicineIndex = medicine.findIndex(med => med._id === id);
            medicine.splice(incrementedMedicineIndex, 1)
            medicine = Array.from(medicine);
            medicine?.splice(incrementedMedicineIndex, 0, incrementedMedicine);
            setMedicine(medicine)

            setTotal(total + incrementedMedicine?.price)

            // handle given amount
            if (givenAmount) {
                const incrementedMedicineVat = incrementedMedicine.price * vatPercentage
                const changeAmount = parseInt(givenAmount) - (((total - totalDiscount) + (total - totalDiscount) * vatPercentage) + (incrementedMedicine.price + incrementedMedicineVat))
                setChangeAmount(changeAmount)
                console.log((((total - totalDiscount) + (total - totalDiscount) * vatPercentage)))

            }

        } else {

            setTotal(total + selectedMedicine.price)
            console.log('add', total, total)
            const dataInfo = { ...selectedMedicine, defaultQuantity: 1 }
            setMedicine([...medicine, dataInfo])

            // handle given amount
            if (givenAmount) {
                const selectedMedicineVat = selectedMedicine.price * vatPercentage
                const changeAmount = parseInt(givenAmount) - (((total - totalDiscount) + (total - totalDiscount) * vatPercentage) + (selectedMedicine.price + selectedMedicineVat))
                setChangeAmount(changeAmount)

            }

        }

    }

    return (
        <div className='h-screen'>
            <SalesBillNavbar />
            <div className='grid grid-cols-2 gap-5'>
                <SalesBillSidebar
                    medicines={medicines}
                    setMedicines={setMedicines}
                    handleMedicine={handleMedicine}
                />
                <SalesBillForm
                    total={total}
                    setTotal={setTotal}
                    medicine={medicine}
                    setMedicine={setMedicine}
                    totalDiscount={totalDiscount}
                    setTotalDiscount={setTotalDiscount}
                    vat={vat}
                    setVat={setVat}
                    vatPercentage={vatPercentage}
                    setVatPercentage={setVatPercentage}
                    givenAmount={givenAmount}
                    setGivenAmount={setGivenAmount}
                    changeAmount={changeAmount}
                    setChangeAmount={setChangeAmount}
                />
            </div>
            <SalesBillBottomBar
                total={total}
                totalDiscount={totalDiscount}
                vatPercentage={vatPercentage}
            />
        </div>
    );
};

export default SalesBill;