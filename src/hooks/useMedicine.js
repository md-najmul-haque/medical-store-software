import React, { useEffect, useState } from 'react';

const useMedicine = () => {
    const [medicines, setMedicines] = useState([])


    useEffect(() => {
        fetch('/medicines.json')
            .then(res => res.json())
            .then(data => {
                setMedicines(data)
            })
    }, [])

    return [medicines, setMedicines]
};

export default useMedicine;