import React, { useEffect, useState } from 'react';

const useMedicine = () => {
    const [medicines, setMedicines] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5000/api/v1/medicine')
            .then(res => res.json())
            .then(data => {
                setMedicines(data.medicineInfo)
                setLoading(false)
            })
    }, [])

    return [medicines, setMedicines, loading]
};

export default useMedicine;