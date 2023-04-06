import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useMedicine = () => {

    const { data: medicines, isLoading, refetch } = useQuery(['medicines'], () =>
        fetch('http://localhost:5000/api/v1/medicine')
            .then(res => res.json()),
        {
            select: (data) => data && data.medicine,
        }
    )

    return { isLoading, medicines, refetch }
};

export default useMedicine;