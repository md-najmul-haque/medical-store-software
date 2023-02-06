import React, { useEffect, useState } from 'react';

const useCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json()
                .then(data => setCategories(data)))
    }, [])

    return [categories, setCategories]
};

export default useCategory;